import { createServer } from 'node:http'
import { readFile, mkdir } from 'node:fs/promises'
import { extname, join, resolve } from 'node:path'
import { chromium } from 'playwright'

const root = resolve('dist')
const qaDir = resolve('qa')
await mkdir(qaDir, { recursive: true })

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
}

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
    const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '')
    const file = resolve(join(root, relative))
    if (!file.startsWith(root)) throw new Error('Invalid path')
    const content = await readFile(file)
    response.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' })
    response.end(content)
  } catch {
    response.writeHead(404)
    response.end('Not found')
  }
})

await new Promise((resolveListen) => server.listen(4173, '127.0.0.1', resolveListen))
const { existsSync } = await import('node:fs')
const systemEdge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ?? (existsSync(systemEdge) ? systemEdge : undefined)
const browser = await chromium.launch({
  executablePath,
  headless: true,
})

const errors = []
const failedRequests = []
const checks = []

function monitor(page, label) {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`${label}: ${message.text()}`)
  })
  page.on('pageerror', (error) => errors.push(`${label}: ${error.message}`))
  page.on('response', (response) => {
    if (response.status() >= 400) failedRequests.push(`${label}: ${response.status()} ${response.url()}`)
  })
}

function check(condition, description) {
  if (!condition) throw new Error(`FAILED: ${description}`)
  checks.push(description)
}

async function noHorizontalOverflow(page, label) {
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    viewport: window.innerWidth,
  }))
  check(dimensions.scrollWidth <= dimensions.viewport + 1, `${label}: no horizontal overflow (${dimensions.scrollWidth}/${dimensions.viewport})`)
}

async function screenshot(page, name) {
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(150)
  await page.screenshot({ path: join(qaDir, `${name}.png`), fullPage: true })
}

try {
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 })
  const page = await desktop.newPage()
  monitor(page, 'desktop')

  await page.goto('http://127.0.0.1:4173/#/', { waitUntil: 'networkidle' })
  check((await page.title()).includes('ChunYin Shang'), 'Homepage title identifies ChunYin Shang')
  check(await page.locator('.home-portrait img').evaluate((image) => image.complete && image.naturalWidth > 0), 'Homepage portrait loads successfully')
  await noHorizontalOverflow(page, 'Desktop homepage')
  await screenshot(page, 'desktop-home')

  await page.getByRole('link', { name: "Explore ChunYin Shang's profile" }).click()
  await page.waitForURL('**/#/profile')
  await page.locator('.profile-intro').waitFor()
  check(await page.locator('.profile-intro').isVisible(), 'Primary profile CTA navigates to profile')
  await page.locator('.speaking-evidence').scrollIntoViewIfNeeded()
  await page.waitForFunction(() => [...document.querySelectorAll('.speaking-gallery img')].every((image) => image.complete && image.naturalWidth > 0))
  check(await page.locator('.speaking-gallery figure').count() === 2, 'Profile renders both public-speaking photographs')
  check(await page.locator('.speaking-gallery img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)), 'Both public-speaking photographs load successfully')
  check(await page.getByText('hosted by Shanghai International Studies University', { exact: false }).isVisible(), 'MUN caption identifies the event host accurately')
  check(await page.getByText('DOCUMENTARY PROJECT · IN PRODUCTION', { exact: true }).isVisible(), 'Documentary is labelled as in production')
  check(await page.getByText('The first interview, lasting more than 40 minutes with a Form 6 student at a Band 1 secondary school in Hong Kong, has been completed. The first episode is currently being edited.', { exact: true }).isVisible(), 'Documentary stage reflects the completed interview and current edit')
  await page.evaluate(() => window.scrollTo(0, 0))
  const scrollBefore = await page.evaluate(() => window.scrollY)
  await page.getByRole('button', { name: 'Research', exact: true }).click()
  await page.waitForTimeout(450)
  const scrollAfter = await page.evaluate(() => window.scrollY)
  check(scrollAfter > scrollBefore, 'Profile contents navigation scrolls to research')
  await page.evaluate(() => window.scrollTo(0, 0))
  await noHorizontalOverflow(page, 'Desktop profile')
  await screenshot(page, 'desktop-profile')

  await page.getByRole('link', { name: 'Writing', exact: true }).click()
  await page.waitForURL('**/#/writing')
  await page.locator('.essay-row').first().waitFor()
  check(await page.locator('.essay-row').count() === 3, 'Writing archive renders all three essays')
  await page.getByLabel('Search essays').fill('Rousseau')
  check(await page.locator('.essay-row').count() === 1, 'Essay search filters by title, content metadata, and tags')
  await page.getByLabel('Search essays').fill('no-such-essay')
  check(await page.getByText('No essay matches those filters.').isVisible(), 'Empty search state is visible')
  await page.getByRole('button', { name: 'Reset all filters' }).click()
  check(await page.locator('.essay-row').count() === 3, 'Reset restores the full essay archive')
  await page.getByRole('button', { name: 'Identity', exact: true }).click()
  check(await page.locator('.essay-row').count() === 1, 'Theme filter selects identity essay')
  await page.getByLabel('Year', { exact: true }).selectOption('2026')
  check(await page.locator('.essay-row').count() === 1, 'Year archive filter works with theme filter')
  await page.getByRole('button', { name: 'All', exact: true }).click()
  await page.getByLabel('Year', { exact: true }).selectOption('All')
  await noHorizontalOverflow(page, 'Desktop writing archive')
  await screenshot(page, 'desktop-writing')

  await page.locator('.essay-row h2 a').filter({ hasText: 'Physically Present, Digitally Unreadable' }).click()
  await page.waitForURL('**/#/writing/physically-present-digitally-unreadable')
  await page.locator('.article-body section').first().waitFor()
  check(await page.locator('.article-body section').count() === 5, 'Essay page renders the complete five-section article')
  await noHorizontalOverflow(page, 'Desktop essay')
  await screenshot(page, 'desktop-article')
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight * 0.65))
  await page.waitForTimeout(150)
  const progressTransform = await page.locator('.reading-progress').evaluate((element) => element.style.transform)
  check(progressTransform !== 'scaleX(0)' && progressTransform !== '', 'Reading progress responds to scroll position')
  await page.getByRole('link', { name: /Older essay/ }).click()
  await page.waitForURL('**/#/writing/the-words-we-fill-with-power')
  await page.getByRole('heading', { name: 'The Words We Fill With Power', exact: true }).waitFor()
  check(await page.locator('h1').innerText() === 'The Words We Fill With Power', 'Article pagination opens the next essay')

  const metrics = await page.evaluate(() => {
    const resources = performance.getEntriesByType('resource')
    return {
      requests: resources.length,
      transferredBytes: resources.reduce((total, resource) => total + (resource.transferSize || 0), 0),
    }
  })
  checks.push(`Performance sample: ${metrics.requests} requests, ${Math.round(metrics.transferredBytes / 1024)} KiB transferred`)
  await desktop.close()

  const mobile = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true })
  const mobilePage = await mobile.newPage()
  monitor(mobilePage, 'mobile')
  const mobileRoutes = [
    ['/', 'mobile-home'],
    ['/profile', 'mobile-profile'],
    ['/writing', 'mobile-writing'],
    ['/writing/physically-present-digitally-unreadable', 'mobile-article'],
  ]
  for (const [route, name] of mobileRoutes) {
    await mobilePage.goto(`http://127.0.0.1:4173/#${route}`, { waitUntil: 'networkidle' })
    await noHorizontalOverflow(mobilePage, `Mobile ${route}`)
    check(await mobilePage.locator('h1, h2').first().isVisible(), `Mobile ${route}: primary content is visible`)
    if (route === '/profile') {
      await mobilePage.locator('.speaking-evidence').scrollIntoViewIfNeeded()
      await mobilePage.waitForFunction(() => [...document.querySelectorAll('.speaking-gallery img')].every((image) => image.complete && image.naturalWidth > 0))
      check(await mobilePage.locator('.speaking-gallery img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)), 'Mobile public-speaking photographs load successfully')
      await mobilePage.locator('.speaking-evidence').screenshot({ path: join(qaDir, 'mobile-speaking-evidence.png') })
    }
    await screenshot(mobilePage, name)
  }
  await mobilePage.goto('http://127.0.0.1:4173/#/writing', { waitUntil: 'networkidle' })
  await mobilePage.getByLabel('Search essays').fill('Belief')
  check(await mobilePage.locator('.essay-row').count() === 1, 'Mobile search remains functional')
  await mobile.close()

  check(errors.length === 0, `Zero browser console errors (${errors.length})`)
  check(failedRequests.length === 0, `Zero failed HTTP requests (${failedRequests.length})`)
  console.log(JSON.stringify({ status: 'passed', checks, errors, failedRequests }, null, 2))
} catch (error) {
  console.error(JSON.stringify({ status: 'failed', error: error.message, checks, errors, failedRequests }, null, 2))
  process.exitCode = 1
} finally {
  await browser.close()
  await new Promise((resolveClose) => server.close(resolveClose))
}
