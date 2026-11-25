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
  '.webp': 'image/webp',
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
  check(await page.locator('.home-opening-gallery img').count() === 3, 'Homepage opening composes three authentic activity photographs')
  check(await page.locator('.home-opening-gallery img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)), 'All three homepage opening photographs load successfully')
  check(await page.locator('.home-portrait img').getAttribute('src') === './images/panel-discussion.webp', 'Homepage main photograph is the SFLSHZ panel discussion')
  check(await page.locator('.home-portrait img').evaluate((image) => {
    const rect = image.getBoundingClientRect()
    return Math.abs(rect.width / rect.height - 0.8) < 0.02 && rect.width <= 560
  }), 'Homepage main photograph uses a compact 4:5 portrait crop that preserves the central speaker')
  check(await page.locator('.home-opening-gallery').evaluate((gallery) => {
    const main = gallery.querySelector('.home-portrait')?.getBoundingClientRect()
    const top = gallery.querySelector('.home-opening-satellite--top')?.getBoundingClientRect()
    const bottom = gallery.querySelector('.home-opening-satellite--bottom')?.getBoundingClientRect()
    return Boolean(main && top && bottom && main.right <= top.left + 1 && main.right <= bottom.left + 1 && main.width * main.height > top.width * top.height && top.bottom <= bottom.top)
  }), 'Desktop opening places the large panel photograph left and two smaller photographs right')
  check(await page.locator('.home-opening-satellite--top img').getAttribute('src') === './images/mun-kenya-home.webp', 'Kenya committee photograph moves to the upper-right position')
  check(await page.locator('.home-opening-satellite--bottom img').getAttribute('src') === './images/model-united-nations-speech.jpg', 'SISU speech photograph moves to the lower-right position')
  check(await page.locator('.home-portrait').getByText('Panel discussion · SFLSHZ', { exact: true }).isVisible(), 'Main portrait carries the accurate SFLSHZ panel caption')
  check(await page.locator('.home-opening-gallery').getByText('Global Youth Shanghai Diplomats Summit · SISU', { exact: true }).isVisible(), 'Homepage opening retains the precise SISU summit caption')
  await page.locator('.home-experiences').scrollIntoViewIfNeeded()
  await page.waitForFunction(() => [...document.querySelectorAll('.photo-ring-slide img')].every((image) => image.complete && image.naturalWidth > 0))
  check(await page.locator('.photo-ring-set').count() === 2, 'Horizontal flow uses two structural sets for a seamless loop')
  check(await page.locator('.photo-ring-set[data-copy="0"] .photo-ring-slide').count() === 6 && await page.locator('.photo-ring-set[data-copy="1"] .photo-ring-slide').count() === 6, 'Each loop set contains the same six activity photographs')
  check(await page.locator('.photo-ring-slide').count() === 12, 'Horizontal flow renders twelve loop instances without adding new source photographs')
  const ringImageSources = await page.locator('.photo-ring-set[data-copy="0"] .photo-ring-slide img').evaluateAll((images) => images.map((image) => image.getAttribute('src')))
  const expectedRingOrder = [
    'piano-performance.webp',
    'football-team.webp',
    'summer-program-group.webp',
    'china-un-presentation.jpg',
    'school-event-speaking.webp',
    'halloween-student-event.webp',
  ].map((file) => `./images/${file}`)
  check(JSON.stringify(ringImageSources) === JSON.stringify(expectedRingOrder), 'Horizontal flow follows the requested six-photograph order')
  check(new Set(ringImageSources).size === 6, 'Horizontal flow uses six unique image sources')
  check(!ringImageSources.some((source) => source?.endsWith('kindergarten-english-reading.webp')), 'Kindergarten reading remains in Student Council leadership')
  check(await page.locator('.photo-ring-slide img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)), 'All horizontal-flow image instances load successfully')
  check(await page.locator('img[src$="piano-performance.webp"]').first().evaluate((image) => image.style.objectPosition) === 'center 48%', 'Piano crop centers the performer instead of the stage backdrop')
  check(await page.locator('.photo-ring-viewport').evaluate((element) => getComputedStyle(element).getPropertyValue('--ring-card-height').trim()) === '260px', 'Desktop flow uses smaller 260 px landscape cards')
  check(await page.locator('.photo-ring-slide').evaluateAll((slides) => getComputedStyle(slides[0]).transform !== getComputedStyle(slides[1]).transform), 'Alternating cards are vertically staggered')
  check(await page.locator('.photo-ring-carousel').getAttribute('data-target-frame-rate') === '90', 'Horizontal flow declares its 90 fps target update interval')
  check(await page.locator('.photo-ring').evaluate((ring) => ring.style.transform.includes('translate3d') && !ring.style.transform.includes('rotateY')), 'Horizontal flow translates without 3D rotation')
  check(await page.locator('.photo-ring-expand[tabindex="0"]').count() === 1, 'Exactly one visible loop instance is keyboard-active')
  const homepageImageSources = await page.locator('img').evaluateAll((images) => images.map((image) => image.getAttribute('src')))
  check(new Set(homepageImageSources).size === 9, 'Homepage retains nine unique photographs; only the loop creates repeated DOM instances')
  check(await page.locator('.photo-ring-controls').count() === 1 && await page.locator('.photo-ring-controls button').count() === 2, 'Photo flow retains only previous and next controls')
  check(await page.getByRole('button', { name: /autoplay|pause rotation|play rotation/i }).count() === 0, 'Photo flow has no autoplay toggle')
  const initialRingIndex = Number(await page.locator('.photo-ring-carousel').getAttribute('data-active-index'))
  await page.waitForFunction((initial) => Number(document.querySelector('.photo-ring-carousel')?.getAttribute('data-active-index')) !== initial, initialRingIndex, { timeout: 7000 })
  check(true, 'Horizontal flow advances automatically while visible')
  await page.locator('.photo-ring-caption').hover()
  check(await page.locator('.photo-ring-carousel').getAttribute('data-autoplay') === 'playing', 'Caption and surrounding space do not pause the flow')
  const activePhotoBox = await page.locator('.photo-ring-expand[tabindex="0"]').boundingBox()
  if (!activePhotoBox) throw new Error('Active photograph has no pointer area')
  await page.mouse.move(activePhotoBox.x + activePhotoBox.width / 2, activePhotoBox.y + activePhotoBox.height / 2)
  check(await page.locator('.photo-ring-carousel').getAttribute('data-autoplay') === 'paused', 'Only the active photograph pauses the flow on hover')
  const pausedRingIndex = await page.locator('.photo-ring-carousel').getAttribute('data-active-index')
  await page.waitForTimeout(1100)
  check(await page.locator('.photo-ring-carousel').getAttribute('data-active-index') === pausedRingIndex, 'Active photograph remains still while hovered')
  await page.mouse.move(0, 0)
  await page.waitForFunction((initial) => Number(document.querySelector('.photo-ring-carousel')?.getAttribute('data-active-index')) !== initial, Number(pausedRingIndex), { timeout: 7000 })
  check(true, 'Leaving the photograph resumes automatic flow')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.waitForFunction(() => document.querySelector('.photo-ring-carousel')?.getAttribute('data-autoplay') === 'paused')
  const beforeNext = Number(await page.locator('.photo-ring-carousel').getAttribute('data-active-index'))
  await page.getByRole('button', { name: 'Next photograph' }).click()
  check(Number(await page.locator('.photo-ring-carousel').getAttribute('data-active-index')) === (beforeNext + 1) % 6, 'Next arrow advances exactly one photograph')
  await page.getByRole('button', { name: 'Previous photograph' }).click()
  check(Number(await page.locator('.photo-ring-carousel').getAttribute('data-active-index')) === beforeNext, 'Previous arrow returns to the preceding photograph')
  await page.locator('.photo-ring-expand[tabindex="0"]').click()
  check(await page.getByRole('dialog').isVisible(), 'Clicking a photograph opens the enlarged view')
  check(await page.locator('.photo-lightbox-content img').evaluate((image) => image.complete && image.naturalWidth > 0), 'Enlarged photograph loads successfully')
  await page.locator('.photo-lightbox').screenshot({ path: join(qaDir, 'desktop-photo-lightbox.png') })
  check(await page.locator('.photo-ring-carousel').getAttribute('data-autoplay') === 'paused', 'Enlarged view pauses background flow')
  await page.keyboard.press('Tab')
  check(await page.getByRole('button', { name: 'Close enlarged photograph' }).evaluate((button) => button === document.activeElement), 'Dialog keeps keyboard focus on its close control')
  await page.keyboard.press('Escape')
  check(await page.getByRole('dialog').count() === 0, 'Escape closes the enlarged photograph')
  await noHorizontalOverflow(page, 'Desktop homepage')
  await screenshot(page, 'desktop-home')
  check(await page.locator('.featured-research').isVisible(), 'Homepage gives the main research project a distinct hierarchy')
  await page.getByRole('link', { name: 'View research record' }).click()
  await page.waitForURL('**/#/profile#research')
  await page.waitForTimeout(200)
  check(await page.evaluate(() => window.scrollY > 0), 'Research record link lands on the research section')
  check(await page.getByText('Research 01 · Read the record', { exact: true }).isVisible(), 'Research project carries a meaningful type and number')
  check(await page.getByText('Documentary 01 · Watch & listen', { exact: true }).isVisible(), 'Documentary project carries a distinct content type')
  await page.goto('http://127.0.0.1:4173/#/', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: "Explore ChunYin Shang's profile" }).click()
  await page.waitForURL('**/#/profile')
  await page.locator('.profile-intro').waitFor()
  check(await page.locator('.profile-intro').isVisible(), 'Primary profile CTA navigates to profile')
  check(await page.locator('.profile-side-figure').count() === 5, 'Profile retains five non-leadership right-column documentary figures')
  check(await page.locator('.leadership-inline-figure').count() === 4, 'Leadership groups two Student Council and two MUN photographs')
  for (const image of await page.locator('.profile-side-figure img, .leadership-inline-figure img').all()) await image.scrollIntoViewIfNeeded()
  await page.waitForFunction(() => [...document.querySelectorAll('.profile-side-figure img, .leadership-inline-figure img')].every((image) => image.complete && image.naturalWidth > 0))
  check(await page.locator('.profile-side-figure img').evaluateAll((images) => new Set(images.map((image) => image.getAttribute('src'))).size === 5), 'Profile side figures use five unique image sources')
  check(await page.locator('.leadership-inline-figure img').evaluateAll((images) => new Set(images.map((image) => image.getAttribute('src'))).size === 4), 'Leadership evidence uses four unique image sources')
  check(await page.locator('.leadership-mun-gallery .leadership-inline-figure').count() === 2, 'Delegate & Bloc Leader contains the two retained MUN photographs')
  check(await page.locator('img[src$="mun-delegate-bloc-leader-02.jpg"]').count() === 0, 'The requested Yale MUN partner-delegation photograph is removed')
  check(await page.getByText('With fellow delegates and partner delegations.', { exact: true }).count() === 0, 'The removed photograph caption no longer appears')
  check(await page.locator('.leadership-inline-figure img[src$="kindergarten-english-reading.webp"]').count() === 1, 'Student Council contains the kindergarten English reading photograph')
  check(await page.locator('.profile-side-figure').evaluateAll((figures) => figures.every((figure) => {
    const content = figure.parentElement?.firstElementChild
    if (!content) return false
    return figure.getBoundingClientRect().left >= content.getBoundingClientRect().right - 1
  })), 'Desktop side figures occupy a distinct right-hand evidence column')
  check(await page.locator('.leadership-entry').evaluateAll((entries) => entries.every((entry) => {
    const copy = entry.querySelector('.leadership-entry-copy')?.getBoundingClientRect()
    const evidence = entry.querySelector('.leadership-entry-evidence')?.getBoundingClientRect()
    return Boolean(copy && evidence && evidence.left >= copy.right - 1)
  })), 'Every leadership photograph group sits to the right of its corresponding text')
  const profileImageSources = await page.locator('img').evaluateAll((images) => images.map((image) => image.getAttribute('src')))
  check(new Set(profileImageSources).size === 10, 'Profile uses ten photographs exactly once')
  check(profileImageSources.every((source) => !homepageImageSources.includes(source)), 'Homepage and Profile share no repeated photographs')
  check(await page.getByText('DOCUMENTARY PROJECT · IN PRODUCTION', { exact: true }).isVisible(), 'Documentary is labelled as in production')
  check(await page.getByText('The first interview, lasting more than 40 minutes with a Form 6 student at a Band 1 secondary school in Hong Kong, has been completed. The first episode is currently being edited.', { exact: true }).isVisible(), 'Documentary stage reflects the completed interview and current edit')
  check(await page.getByRole('link', { name: 'Read selected research note' }).getAttribute('href') === '#/writing/public-toilet-policy-notes', 'Profile research record links to the selected research note')
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
  check(await page.locator('.essay-row').count() === 4, 'Writing archive renders three essays and one research note')
  await page.getByLabel('Search essays').fill('Rousseau')
  check(await page.locator('.essay-row').count() === 1, 'Essay search filters by title, content metadata, and tags')
  await page.getByLabel('Search essays').fill('no-such-essay')
  check(await page.getByText('No essay matches those filters.').isVisible(), 'Empty search state is visible')
  await page.getByRole('button', { name: 'Reset all filters' }).click()
  check(await page.locator('.essay-row').count() === 4, 'Reset restores the full writing archive')
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
  check(await page.locator('.article-body section').count() === 5, 'Essay page renders the complete five-section English article')
  await page.getByRole('button', { name: '中文原文', exact: true }).click()
  check(await page.locator('h1').innerText() === '我在香港丢了一个钱包', 'Wallet essay switches to the Chinese original')
  check(await page.locator('.article-body section').count() === 6, 'Wallet Chinese original retains all six body sections')
  const walletChinese = await page.locator('.article-body').innerText()
  check(!walletChinese.includes('问：') && !walletChinese.includes('解析：'), 'Wallet Chinese original excludes the AI dialogue and analysis')
  await noHorizontalOverflow(page, 'Desktop Chinese essay')
  await screenshot(page, 'desktop-article-chinese')
  await page.getByRole('button', { name: 'English', exact: true }).click()
  check(await page.locator('h1').innerText() === 'Physically Present, Digitally Unreadable', 'English switch restores the edited essay')
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
  await page.locator('.article-figure--portrait img').scrollIntoViewIfNeeded()
  await page.waitForFunction(() => document.querySelector('.article-figure--portrait img')?.complete && document.querySelector('.article-figure--portrait img')?.naturalWidth > 0)
  check(await page.locator('.article-figure--portrait img').getAttribute('src') === './images/rousseau-portrait.jpg', 'Rousseau portrait loads in the English article')
  await page.getByRole('button', { name: '中文原文', exact: true }).click()
  check(await page.locator('h1').innerText() === '祖国、公意、人民：政治的填空题', 'Rousseau essay includes its Chinese original')
  check(await page.locator('.article-body section').count() === 5, 'Rousseau Chinese original retains all five sections')
  await page.getByRole('button', { name: 'English', exact: true }).click()

  await page.goto('http://127.0.0.1:4173/#/writing/belief-is-not-a-truth-test', { waitUntil: 'networkidle' })
  await page.locator('.article-figure--portrait img').scrollIntoViewIfNeeded()
  await page.waitForFunction(() => document.querySelector('.article-figure--portrait img')?.complete && document.querySelector('.article-figure--portrait img')?.naturalWidth > 0)
  check(await page.locator('.article-figure--portrait img').getAttribute('src') === './images/hegel-portrait.jpg', 'Hegel portrait loads in the English article')
  await page.getByRole('button', { name: '中文原文', exact: true }).click()
  check(await page.locator('h1').innerText() === '“信则有，不信则无”：宗教还是哲学？', 'Hegel essay includes its Chinese original')
  check(await page.locator('.article-body section').count() === 6, 'Hegel Chinese original retains all six sections')

  await page.goto('http://127.0.0.1:4173/#/writing/public-toilet-policy-notes', { waitUntil: 'networkidle' })
  check(await page.locator('h1').innerText() === 'When a Public Toilet Becomes a Policy Question', 'Research note is available as a dedicated reading page')
  check(await page.locator('.article-body section').count() === 5, 'Research note separates observation, evidence, hypotheses, interpretation, and open questions')
  check(await page.locator('.article-references a').count() === 2, 'Research note links two official documentary sources')
  await page.locator('.article-figure--document').first().scrollIntoViewIfNeeded()
  await page.waitForFunction(() => [...document.querySelectorAll('.article-figure--document img')].every((image) => image.complete && image.naturalWidth > 0))
  check(await page.locator('.article-figure--document img').count() === 2, 'Research note renders both original policy screenshots')
  await noHorizontalOverflow(page, 'Desktop research note')
  await screenshot(page, 'desktop-research-note')

  const metrics = await page.evaluate(() => {
    const resources = performance.getEntriesByType('resource')
    return {
      requests: resources.length,
      transferredBytes: resources.reduce((total, resource) => total + (resource.transferSize || 0), 0),
    }
  })
  checks.push(`Performance sample: ${metrics.requests} requests, ${Math.round(metrics.transferredBytes / 1024)} KiB transferred`)
  await desktop.close()

  const mobile = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, reducedMotion: 'reduce' })
  const mobilePage = await mobile.newPage()
  monitor(mobilePage, 'mobile')
  const mobileRoutes = [
    ['/', 'mobile-home'],
    ['/profile', 'mobile-profile'],
    ['/writing', 'mobile-writing'],
    ['/writing/physically-present-digitally-unreadable', 'mobile-article'],
    ['/writing/the-words-we-fill-with-power', 'mobile-rousseau-article'],
    ['/writing/public-toilet-policy-notes', 'mobile-research-note'],
  ]
  for (const [route, name] of mobileRoutes) {
    await mobilePage.goto(`http://127.0.0.1:4173/#${route}`, { waitUntil: 'networkidle' })
    await noHorizontalOverflow(mobilePage, `Mobile ${route}`)
    check(await mobilePage.locator('h1, h2').first().isVisible(), `Mobile ${route}: primary content is visible`)
    if (route === '/') {
      check(await mobilePage.locator('.home-opening-gallery').evaluate((gallery) => {
        const main = gallery.querySelector('.home-portrait')?.getBoundingClientRect()
        const top = gallery.querySelector('.home-opening-satellite--top')?.getBoundingClientRect()
        const bottom = gallery.querySelector('.home-opening-satellite--bottom')?.getBoundingClientRect()
        return Boolean(main && top && bottom && main.bottom <= top.top + 1 && main.bottom <= bottom.top + 1 && Math.abs(top.top - bottom.top) < 2)
      }), 'Mobile opening keeps the panel portrait above two equal-column landscape photographs')
      await mobilePage.locator('.home-experiences').scrollIntoViewIfNeeded()
      await mobilePage.waitForFunction(() => [...document.querySelectorAll('.photo-ring-slide img')].every((image) => image.complete && image.naturalWidth > 0))
      check(await mobilePage.locator('.photo-ring-slide img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)), 'Mobile horizontal flow loads all six unique photographs')
      check(await mobilePage.locator('.photo-ring-carousel').getAttribute('data-autoplay') === 'paused', 'Reduced motion disables horizontal autoplay on mobile')
      check(await mobilePage.locator('.photo-ring-controls button').count() === 2, 'Mobile horizontal flow provides previous and next controls')
      check(await mobilePage.locator('.photo-ring-expand[tabindex="0"]').count() === 1, 'Mobile flow has one keyboard-active loop instance')
      const mobileInitialIndex = Number(await mobilePage.locator('.photo-ring-carousel').getAttribute('data-active-index'))
      await mobilePage.getByRole('button', { name: 'Next photograph' }).click()
      check(Number(await mobilePage.locator('.photo-ring-carousel').getAttribute('data-active-index')) === (mobileInitialIndex + 1) % 6, 'Mobile Next arrow advances one photograph')
      await mobilePage.getByRole('button', { name: 'Previous photograph' }).click()
      check(Number(await mobilePage.locator('.photo-ring-carousel').getAttribute('data-active-index')) === mobileInitialIndex, 'Mobile Previous arrow returns to the initial photograph')
      await mobilePage.locator('.photo-ring-expand[tabindex="0"]').click()
      check(await mobilePage.getByRole('dialog').isVisible(), 'Tapping the mobile photograph opens its enlarged view')
      await noHorizontalOverflow(mobilePage, 'Mobile enlarged photograph')
      await mobilePage.getByRole('button', { name: 'Close enlarged photograph' }).click()
      check(await mobilePage.getByRole('dialog').count() === 0, 'Mobile close button dismisses the enlarged photograph')
      await mobilePage.locator('.home-experiences').screenshot({ path: join(qaDir, 'mobile-home-experiences.png') })
    }
    if (route === '/profile') {
      for (const image of await mobilePage.locator('.profile-side-figure img, .leadership-inline-figure img').all()) await image.scrollIntoViewIfNeeded()
      await mobilePage.waitForFunction(() => [...document.querySelectorAll('.profile-side-figure img, .leadership-inline-figure img')].every((image) => image.complete && image.naturalWidth > 0))
      check(await mobilePage.locator('.profile-side-figure img, .leadership-inline-figure img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)), 'Mobile section and leadership photographs load successfully')
      check(await mobilePage.locator('.leadership-mun-gallery').evaluate((gallery) => getComputedStyle(gallery).gridTemplateColumns.split(' ').length === 1), 'Mobile MUN gallery stacks in one column')
      check(await mobilePage.locator('.profile-side-figure').evaluateAll((figures) => figures.every((figure) => {
        const content = figure.parentElement?.firstElementChild
        if (!content) return false
        return figure.getBoundingClientRect().top >= content.getBoundingClientRect().bottom - 1
      })), 'Mobile side figures stack below their corresponding section content')
      check(await mobilePage.locator('.leadership-entry').evaluateAll((entries) => entries.every((entry) => {
        const copy = entry.querySelector('.leadership-entry-copy')?.getBoundingClientRect()
        const evidence = entry.querySelector('.leadership-entry-evidence')?.getBoundingClientRect()
        return Boolean(copy && evidence && evidence.top >= copy.bottom - 1)
      })), 'Mobile leadership photographs stack below their corresponding text')
      check(await mobilePage.locator('.speaking-evidence, .activity-mosaic').count() === 0, 'Profile does not repeat homepage activity galleries')
      await noHorizontalOverflow(mobilePage, 'Mobile profile without duplicate galleries')
    }
    if (route === '/writing/physically-present-digitally-unreadable') {
      await mobilePage.getByRole('button', { name: '中文原文', exact: true }).click()
      check(await mobilePage.locator('h1').innerText() === '我在香港丢了一个钱包', 'Mobile language switch displays the wallet Chinese original')
      await noHorizontalOverflow(mobilePage, 'Mobile Chinese wallet essay')
      await screenshot(mobilePage, 'mobile-article-chinese')
      await mobilePage.getByRole('button', { name: 'English', exact: true }).click()
    }
    if (route === '/writing/the-words-we-fill-with-power') {
      await mobilePage.locator('.article-figure--portrait img').scrollIntoViewIfNeeded()
      await mobilePage.waitForFunction(() => document.querySelector('.article-figure--portrait img')?.complete && document.querySelector('.article-figure--portrait img')?.naturalWidth > 0)
      check(await mobilePage.locator('.article-figure--portrait img').count() === 1, 'Mobile Rousseau portrait loads successfully')
      await mobilePage.getByRole('button', { name: '中文原文', exact: true }).click()
      await noHorizontalOverflow(mobilePage, 'Mobile Chinese Rousseau essay')
      await screenshot(mobilePage, 'mobile-rousseau-chinese')
      await mobilePage.getByRole('button', { name: 'English', exact: true }).click()
    }
    if (route === '/writing/public-toilet-policy-notes') {
      await mobilePage.locator('.article-figure--document').first().scrollIntoViewIfNeeded()
      await mobilePage.waitForFunction(() => [...document.querySelectorAll('.article-figure--document img')].every((image) => image.complete && image.naturalWidth > 0))
      check(await mobilePage.locator('.article-figure--document img').count() === 2, 'Mobile research screenshots load successfully')
      await noHorizontalOverflow(mobilePage, 'Mobile research evidence')
    }
    await screenshot(mobilePage, name)
  }
  await mobilePage.goto('http://127.0.0.1:4173/#/writing', { waitUntil: 'networkidle' })
  await mobilePage.getByLabel('Search essays').fill('Belief')
  check(await mobilePage.locator('.essay-row').count() === 1, 'Mobile search remains functional')
  await mobile.close()

  for (const width of [768, 1024]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' })
    const responsivePage = await context.newPage()
    monitor(responsivePage, `profile-${width}`)
    await responsivePage.goto('http://127.0.0.1:4173/#/profile', { waitUntil: 'networkidle' })
    for (const image of await responsivePage.locator('.profile-side-figure img, .leadership-inline-figure img').all()) await image.scrollIntoViewIfNeeded()
    await responsivePage.waitForFunction(() => [...document.querySelectorAll('.profile-side-figure img, .leadership-inline-figure img')].every((image) => image.complete && image.naturalWidth > 0))
    await noHorizontalOverflow(responsivePage, `Profile at ${width}px`)
    check(await responsivePage.locator('.profile-side-figure').evaluateAll((figures, viewportWidth) => figures.every((figure) => {
      const content = figure.parentElement?.firstElementChild
      if (!content) return false
      const figureRect = figure.getBoundingClientRect()
      const contentRect = content.getBoundingClientRect()
      return viewportWidth > 1000
        ? figureRect.left >= contentRect.right - 1
        : figureRect.top >= contentRect.bottom - 1
    }), width), `Profile evidence layout adapts correctly at ${width}px`)
    await screenshot(responsivePage, `profile-${width}`)
    await context.close()
  }

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
