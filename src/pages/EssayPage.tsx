import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { essays } from '../content'

export default function EssayPage() {
  const { slug } = useParams()
  const essayIndex = essays.findIndex((item) => item.slug === slug)
  const essay = essays[essayIndex]
  const [progress, setProgress] = useState(0)
  const [languageSelection, setLanguageSelection] = useState<{ slug?: string; value: 'en' | 'zh' }>({ value: 'en' })
  const language = languageSelection.slug === slug ? languageSelection.value : 'en'
  const setLanguage = (value: 'en' | 'zh') => setLanguageSelection({ slug, value })

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [slug, language])

  if (!essay) {
    return (
      <div className="page-shell">
        <SiteHeader />
        <main className="not-found">
          <h1>This note is not in the archive.</h1>
          <p className="eyebrow">Essay not found</p>
          <Link to="/writing" className="text-link"><ArrowLeft aria-hidden="true" size={18} /> Return to all writing</Link>
        </main>
      </div>
    )
  }

  const previous = essayIndex > 0 ? essays[essayIndex - 1] : null
  const next = essayIndex < essays.length - 1 ? essays[essayIndex + 1] : null
  const original = essay.original
  const showOriginal = language === 'zh' && original
  const title = showOriginal ? original.title : essay.title
  const subtitle = showOriginal ? original.subtitle : essay.subtitle
  const category = showOriginal ? original.category : essay.category
  const sections = showOriginal ? original.sections : essay.sections
  const note = showOriginal
    ? essay.slug === 'physically-present-digitally-unreadable'
      ? '个人随笔 · 中文正文，未收录原文后的问答部分。'
      : '作者中文原文 · 首发于 PPE自习室。'
    : essay.kind === 'research'
      ? 'Research note · Selected excerpts and documentary evidence from a working paper.'
      : 'Personal essay · Edited in English from the author’s original notes.'

  return (
    <div className="page-shell essay-page">
      <div className="reading-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
      <SiteHeader />
      <main>
        <article className="article-shell">
          <header className="article-header">
            <Link to="/writing" className="back-link"><ArrowLeft aria-hidden="true" size={18} /> All writing</Link>
            <h1 className={showOriginal ? 'article-title-chinese' : undefined}>{title}</h1>
            {subtitle && <p className="article-subtitle">{subtitle}</p>}
            <div className="article-byline">
              <span>{category}</span>
              <span>{showOriginal ? '作者：ChunYin Shang' : 'By ChunYin Shang'}</span>
              <span>{essay.year}</span>
              <span>{showOriginal ? '中文原文' : `${essay.readingTime} min read`}</span>
            </div>
            {original && (
              <div className="article-language" role="group" aria-label="Article language">
                <button type="button" className={language === 'en' ? 'is-active' : undefined} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>
                  English
                </button>
                <button type="button" className={language === 'zh' ? 'is-active' : undefined} aria-pressed={language === 'zh'} onClick={() => setLanguage('zh')}>
                  中文原文
                </button>
              </div>
            )}
            <ul className="inline-tags" aria-label="Essay themes">
              {essay.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </header>

          <div className="article-layout">
            <aside className="article-margin">
              <p className="eyebrow">{showOriginal ? '原文说明' : 'A note on the text'}</p>
              <p>{note}</p>
              {essay.sourceUrl && (
                <a href={essay.sourceUrl} target="_blank" rel="noreferrer" className="text-link">
                  {showOriginal ? '微信公众号原始发布' : 'Original Chinese publication'} <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              )}
              {essay.references && (
                <div className="article-references">
                  <p className="eyebrow">Documents</p>
                  {essay.references.map((reference) => (
                    <a key={reference.url} href={reference.url} target="_blank" rel="noreferrer" className="text-link">
                      {reference.label} <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                  ))}
                </div>
              )}
            </aside>
            <div className={showOriginal ? 'article-body is-chinese' : 'article-body'}>
              {sections.map((section, index) => (
                <section key={section.heading ?? index}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.images?.map((image) => (
                    <figure key={image.src} className={`article-figure article-figure--${image.layout ?? 'document'}`}>
                      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
                      <figcaption>{image.caption}</figcaption>
                    </figure>
                  ))}
                  {section.quote && (
                    <blockquote>
                      <p>“{section.quote.text}”</p>
                      <cite>{section.quote.attribution}</cite>
                    </blockquote>
                  )}
                </section>
              ))}
            </div>
          </div>
        </article>

        <nav className="article-pagination" aria-label="More essays">
          {previous ? (
            <Link to={`/writing/${previous.slug}`} className="pagination-link previous">
              <span><ArrowLeft aria-hidden="true" size={18} /> Newer essay</span>
              <strong>{previous.title}</strong>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/writing/${next.slug}`} className="pagination-link next">
              <span>Older essay <ArrowRight aria-hidden="true" size={18} /></span>
              <strong>{next.title}</strong>
            </Link>
          ) : (
            <Link to="/writing" className="pagination-link next">
              <span>Continue <ArrowRight aria-hidden="true" size={18} /></span>
              <strong>Browse the complete archive</strong>
            </Link>
          )}
        </nav>
      </main>
      <SiteFooter />
    </div>
  )
}
