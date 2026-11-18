import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { essays } from '../content'

export default function Home() {
  return (
    <main className="home-shell">
      <header className="home-header">
        <Link to="/" className="home-name" aria-label="ChunYin Shang — home">
          ChunYin Shang <span>(Khelil)</span>
        </Link>
        <p>Hangzhou ↔ Hong Kong</p>
      </header>

      <div className="split-panels">
        <section className="split-panel profile-panel" aria-labelledby="profile-entry-title">
          <div className="panel-index">A personal profile</div>
          <div className="panel-copy">
            <p className="panel-overline">Learning, research & public life</p>
            <h1 id="profile-entry-title">Profile</h1>
            <p className="panel-description">
              An international high school student exploring PPE, STS, public policy, and the institutions that shape everyday life.
            </p>
            <Link to="/profile" className="panel-link" aria-label="Explore ChunYin Shang's profile">
              Explore my profile <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <figure className="home-portrait">
            <img src="./images/chunyin-shang.jpg" alt="Portrait of ChunYin Shang in his school uniform" />
            <figcaption>Student Council President · SFLSHZ</figcaption>
          </figure>
        </section>

        <div className="panel-pivot" aria-hidden="true">&</div>

        <section className="split-panel writing-panel" aria-labelledby="writing-entry-title">
          <div className="panel-index">Essays & observations</div>
          <div className="panel-copy">
            <p className="panel-overline">Philosophy begins in the everyday</p>
            <h2 id="writing-entry-title">Writing</h2>
            <p className="panel-description">
              Notes on belief, political authority, identity, and the moments when ordinary experiences become intellectual questions.
            </p>
            <Link to="/writing" className="panel-link" aria-label="Read ChunYin Shang's essays">
              Read my essays <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="home-writing-list" aria-label="Featured essays">
            {essays.slice(0, 2).map((essay, index) => (
              <Link to={`/writing/${essay.slug}`} key={essay.slug} className="home-essay-link">
                <span>0{index + 1}</span>
                <strong>{essay.title}</strong>
                <ArrowUpRight aria-hidden="true" size={20} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
