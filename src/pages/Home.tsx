import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { essays } from '../content'

const currentWork = [
  {
    title: 'Public Toilet Policies: Hong Kong and Mainland China',
    meta: 'Independent research · Working paper',
    description: 'Comparing field observation and policy documents to understand how everyday public services take shape.',
  },
  {
    title: 'Political philosophy, read against lived experience',
    meta: 'Independent reading & writing',
    description: 'Reading Jonathan Wolff and writing through questions of authority, identity, belief, and the general will.',
  },
  {
    title: 'Turning student concerns into workable proposals',
    meta: 'Student Council President · SFLSHZ',
    description: 'Building a clearer events calendar and routes for student concerns to reach school decision-makers.',
  },
]

export default function Home() {
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
          <h1 id="home-title">How do institutions<br />shape <em>everyday life?</em></h1>
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

        <figure className="home-portrait">
          <img
            src="./images/mun-delegate-discussion.webp"
            alt="ChunYin Shang seated behind a China nameplate, discussing a position with another Model United Nations delegate"
            width="1800"
            height="829"
          />
          <figcaption>
            <span>In committee</span>
            <p>Discussing a position with another delegate during a Model United Nations session.</p>
          </figcaption>
        </figure>
      </section>

      <section className="home-work" aria-labelledby="current-work-title">
        <header className="home-section-heading">
          <h2 id="current-work-title">What I’m working on</h2>
          <p>Research, independent reading, and student leadership—three ways of testing the same interests in different settings.</p>
        </header>
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
        <div className="home-experience-grid">
          <figure className="experience-primary">
            <img
              src="./images/china-un-presentation.jpg"
              alt="ChunYin Shang presenting on China’s return to the United Nations at SFLSHZ"
              width="1280"
              height="853"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Academic presentation · SFLSHZ</span>
              <p>Connecting historical inquiry with public communication in a presentation on China’s return to the United Nations.</p>
            </figcaption>
          </figure>
          <figure className="experience-secondary">
            <img
              src="./images/panel-discussion.webp"
              alt="ChunYin Shang speaking into a microphone during a seated panel discussion"
              width="1279"
              height="1706"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Panel discussion · SFLSHZ</span>
              <p>Listening and responding in a seated discussion with fellow students.</p>
            </figcaption>
          </figure>
        </div>
        <Link to="/profile#activities" className="text-link experience-link">
          More experiences & photographs <ArrowRight aria-hidden="true" size={18} />
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
              <span className="home-essay-meta">{essay.category}<br />{essay.year}</span>
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
