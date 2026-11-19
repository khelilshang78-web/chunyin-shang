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
  }, [slug])

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

  return (
    <div className="page-shell essay-page">
      <div className="reading-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
      <SiteHeader />
      <main>
        <article className="article-shell">
          <header className="article-header">
            <Link to="/writing" className="back-link"><ArrowLeft aria-hidden="true" size={18} /> All writing</Link>
            <h1>{essay.title}</h1>
            <p className="article-subtitle">{essay.subtitle}</p>
            <div className="article-byline">
              <span>{essay.category}</span>
              <span>By ChunYin Shang</span>
              <span>{essay.year}</span>
              <span>{essay.readingTime} min read</span>
            </div>
            <ul className="inline-tags" aria-label="Essay themes">
              {essay.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </header>

          <div className="article-layout">
            <aside className="article-margin">
              <p className="eyebrow">A note on the text</p>
              <p>Personal essay · Edited in English from the author’s original notes.</p>
              {essay.sourceUrl && (
                <a href={essay.sourceUrl} target="_blank" rel="noreferrer" className="text-link">
                  Original Chinese publication <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              )}
            </aside>
            <div className="article-body">
              {essay.sections.map((section, index) => (
                <section key={section.heading ?? index}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
