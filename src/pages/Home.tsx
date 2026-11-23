import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { essays, researchProjects } from '../content'
import { useReveal } from '../hooks/useReveal'
import PhotoRing from '../components/PhotoRing'

const currentWork = [
  {
    title: 'Political philosophy, read against lived experience',
    meta: 'Essay series · Independent reading & writing',
    description: 'Reading Jonathan Wolff and writing through questions of authority, identity, belief, and the general will.',
  },
  {
    title: 'Turning student concerns into workable proposals',
    meta: 'Leadership · Student Council President, SFLSHZ',
    description: 'Building a clearer events calendar and routes for student concerns to reach school decision-makers.',
  },
]

export default function Home() {
  const featuredResearch = researchProjects[0]
  const researchReveal = useReveal<HTMLElement>()
  const galleryReveal = useReveal<HTMLDivElement>()

  return (
    <main className="home-shell">
      <header className="home-header">
        <Link to="/" className="home-name" aria-label="ChunYin Shang — home">
          ChunYin Shang <span>(Khelil)</span>
        </Link>
        <nav className="home-nav" aria-label="Main navigation">
          <Link to="/profile">Profile</Link>
          <Link to="/writing">Writing</Link>
          <a href="mailto:khelilshang78@gmail.com">Contact</a>
        </nav>
      </header>

      <section className="home-opening" aria-labelledby="home-title">
        <div className="home-opening-copy">
          <h1 id="home-title">
            <span className="hero-line"><span>How do institutions</span></span>
            <span className="hero-line"><span>shape <em>everyday life?</em></span></span>
          </h1>
          <div className="home-intro-row">
            <p className="home-intro">
              I’m ChunYin Shang, an international high school student based between Hangzhou and Hong Kong. I approach that question through PPE, STS, public policy, field observation, and writing.
            </p>
            <div className="home-actions">
              <Link to="/profile" className="panel-link" aria-label="Explore ChunYin Shang's profile">
                Explore my profile <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link to="/writing" className="text-link muted-link" aria-label="Read ChunYin Shang's essays">
                Read my essays <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="home-opening-gallery" aria-label="ChunYin Shang in public discussion">
          <figure className="home-portrait">
            <img
              src="./images/mun-kenya-home.webp"
              alt="ChunYin Shang representing Kenya during a Berkeley MUN China committee session"
              width="620"
              height="715"
              fetchPriority="high"
            />
            <figcaption>
              <span>Berkeley MUN China</span>
              <p>Representing Kenya during a committee working session.</p>
            </figcaption>
          </figure>

          <figure className="home-opening-satellite home-opening-satellite--left">
            <img
              src="./images/model-united-nations-speech.jpg"
              alt="ChunYin Shang speaking at a podium at Shanghai International Studies University"
              width="1620"
              height="1080"
            />
            <figcaption>Global Youth Shanghai Diplomats Summit · SISU</figcaption>
          </figure>

          <figure className="home-opening-satellite home-opening-satellite--right">
            <img
              src="./images/panel-discussion.webp"
              alt="ChunYin Shang speaking into a microphone during a school panel discussion"
              width="1279"
              height="1706"
            />
            <figcaption>Panel discussion · SFLSHZ</figcaption>
          </figure>
        </div>
      </section>

      <section className="home-work" aria-labelledby="current-work-title">
        <header className="home-section-heading">
          <h2 id="current-work-title">What I’m working on</h2>
          <p>One research question, followed by the reading and leadership work that help me test it from different directions.</p>
        </header>

        <article ref={researchReveal} className="featured-research reveal reveal-record" aria-labelledby="featured-research-title">
          <div className="featured-research-heading">
            <p className="project-index">Research 01 · Working paper</p>
            <h3 id="featured-research-title">{featuredResearch.title}</h3>
            <p>{featuredResearch.summary}</p>
            <Link to="/profile#research" className="text-link">
              View research record <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <dl className="featured-research-record">
            <div>
              <dt>Research question</dt>
              <dd>{featuredResearch.question}</dd>
            </div>
            <div>
              <dt>Methods</dt>
              <dd>{featuredResearch.tags.join(' · ')}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Independent research · 2026</dd>
            </div>
          </dl>
        </article>

        <div className="current-work-list">
          {currentWork.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="item-meta">{item.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-experiences" aria-labelledby="experiences-title">
        <header className="home-section-heading">
          <h2 id="experiences-title">Ideas, tested with other people</h2>
          <p>Public communication matters to me when it turns careful preparation into a conversation others can enter.</p>
        </header>
        <div ref={galleryReveal} className="photo-ring-showcase reveal reveal-gallery">
          <PhotoRing />
        </div>
        <Link to="/profile#leadership" className="text-link experience-link">
          More about leadership & learning <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </section>

      <section className="home-writing" aria-labelledby="selected-writing-title">
        <header className="home-writing-heading">
          <h2 id="selected-writing-title">Selected writing</h2>
          <Link to="/writing" className="text-link">
            Complete archive <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </header>
        <div className="home-writing-list">
          {essays.map((essay) => (
            <Link to={`/writing/${essay.slug}`} key={essay.slug} className="home-essay-link">
              <span className="home-essay-meta">Read · Essay<br />{essay.year}</span>
              <span className="home-essay-copy">
                <strong>{essay.title}</strong>
                <span>{essay.excerpt}</span>
              </span>
              <ArrowUpRight aria-hidden="true" size={24} />
            </Link>
          ))}
        </div>
      </section>

      <footer className="home-contact">
        <p>ChunYin Shang · Hangzhou ↔ Hong Kong</p>
        <a href="mailto:khelilshang78@gmail.com">khelilshang78@gmail.com <ArrowUpRight aria-hidden="true" size={22} /></a>
      </footer>
    </main>
  )
}
