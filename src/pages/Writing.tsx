import { ArrowUpRight, Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { essays } from '../content'

export default function Writing() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('All')
  const [activeYear, setActiveYear] = useState('All')

  const tags = useMemo(() => ['All', ...Array.from(new Set(essays.flatMap((essay) => essay.tags))).sort()], [])
  const years = useMemo(() => ['All', ...Array.from(new Set(essays.map((essay) => essay.year))).sort().reverse()], [])

  const filteredEssays = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return essays.filter((essay) => {
      const matchesTag = activeTag === 'All' || essay.tags.includes(activeTag)
      const matchesYear = activeYear === 'All' || essay.year === activeYear
      const searchable = `${essay.title} ${essay.subtitle} ${essay.excerpt} ${essay.category} ${essay.tags.join(' ')}`.toLowerCase()
      return matchesTag && matchesYear && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [activeTag, activeYear, query])

  const resetFilters = () => {
    setQuery('')
    setActiveTag('All')
    setActiveYear('All')
  }

  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="writing-shell">
        <header className="writing-hero">
          <h1>Essays &<br />observations</h1>
          <p>
            I write to test an idea, not to perform certainty. These essays begin with ordinary encounters—a temple visit, a translated word, a lost wallet—and follow the questions they open.
          </p>
        </header>

        <section className="writing-tools" aria-label="Filter essays">
          <div className="search-field">
            <Search aria-hidden="true" size={20} />
            <label htmlFor="essay-search" className="sr-only">Search essays</label>
            <input
              id="essay-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, idea, or theme"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
                <X aria-hidden="true" size={18} />
              </button>
            )}
          </div>
          <div className="filter-row">
            <div className="tag-filters" aria-label="Filter by theme">
              {tags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  className={activeTag === tag ? 'filter-button is-active' : 'filter-button'}
                  aria-pressed={activeTag === tag}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="year-filter">
              <label htmlFor="year-select">Year</label>
              <select id="year-select" value={activeYear} onChange={(event) => setActiveYear(event.target.value)}>
                {years.map((year) => <option key={year} value={year}>{year === 'All' ? 'All years' : year}</option>)}
              </select>
            </div>
          </div>
        </section>

        <section className="essay-archive" aria-live="polite" aria-label="Essay archive">
          <div className="archive-heading">
            <h2>Full archive</h2>
            <p>{filteredEssays.length} {filteredEssays.length === 1 ? 'essay' : 'essays'}</p>
          </div>
          {filteredEssays.length > 0 ? (
            <div className="essay-list">
              {filteredEssays.map((essay) => (
                <article className="essay-row" key={essay.slug}>
                  <div className="essay-row-meta">
                    <span>{essay.year}</span>
                    <span>{essay.readingTime} min read</span>
                  </div>
                  <div>
                    <h2><Link to={`/writing/${essay.slug}`}>{essay.title}</Link></h2>
                    <p className="essay-category">{essay.category}</p>
                    <p className="essay-subtitle">{essay.subtitle}</p>
                    <p className="essay-excerpt">{essay.excerpt}</p>
                    <ul className="inline-tags" aria-label="Essay themes">
                      {essay.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                  <Link to={`/writing/${essay.slug}`} className="essay-arrow" aria-label={`Read ${essay.title}`}>
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No essay matches those filters.</h2>
              <p>Try another word or return to the complete archive.</p>
              <button type="button" className="text-button" onClick={resetFilters}>Reset all filters</button>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
