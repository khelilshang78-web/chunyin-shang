import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import {
  academicInterests,
  capabilities,
  education,
  leadership,
  learningJourney,
  profile,
  researchProjects,
} from '../content'

const sections = [
  ['direction', 'Direction'],
  ['research', 'Research'],
  ['learning', 'Learning'],
  ['leadership', 'Leadership'],
  ['education', 'Education'],
  ['capabilities', 'Capabilities'],
]

type SectionFigureProps = {
  src: string
  alt: string
  width: number
  height: number
  title: string
  caption: string
  className?: string
}

function SectionFigure({ src, alt, width, height, title, caption, className = '' }: SectionFigureProps) {
  return (
    <figure className={`profile-side-figure ${className}`.trim()}>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      <figcaption>
        <span>{title}</span>
        <p>{caption}</p>
      </figcaption>
    </figure>
  )
}

function LeadershipFigure({ src, alt, width, height, title, caption }: SectionFigureProps) {
  return (
    <figure className="leadership-inline-figure">
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      <figcaption>
        <span>{title}</span>
        <p>{caption}</p>
      </figcaption>
    </figure>
  )
}

export default function Profile() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="profile-grid">
        <aside className="profile-identity">
          <div className="identity-sticky">
            <img src="./images/chunyin-shang.jpg" alt="ChunYin Shang" className="profile-photo" />
            <h1>{profile.name}</h1>
            <p className="preferred-name">Also known as {profile.preferredName}</p>
            <p className="identity-location">{profile.location}</p>
            <p className="eyebrow">Personal profile</p>
          </div>
        </aside>

        <div className="profile-content">
          <section className="profile-intro" aria-labelledby="intro-title">
            <h2 id="intro-title">Learning how institutions shape the lives they are meant to serve.</h2>
            <p>{profile.introduction}</p>
            <p>{profile.approach}</p>
            <div className="profile-actions">
              <a className="text-link" href={`mailto:${profile.email}`}>
                Start a conversation <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <Link className="text-link muted-link" to="/writing">
                Browse my writing <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </section>

          <section id="direction" className="profile-section">
            <h2>Questions before labels</h2>
            <p className="section-intro">
              My interests sit across PPE, STS, public policy, political science, and sociology. These are the questions currently giving those fields a common direction.
            </p>
            <div className="profile-section-split">
              <div className="interest-list">
                {academicInterests.map((interest) => (
                  <article key={interest.title}>
                    <h3>{interest.title}</h3>
                    <p className="interest-question">{interest.question}</p>
                    <p>{interest.detail}</p>
                  </article>
                ))}
              </div>
              <SectionFigure
                src="./images/profile-reading-collage.webp"
                alt="A collage of books and reading notes spanning literature, philosophy, utopian studies, and artificial intelligence"
                width={1080}
                height={1440}
                title="A reading collage"
                caption="Philosophy, literature, and technology, gathered as an ongoing record of interests."
              />
            </div>
          </section>

          <section id="research" className="profile-section">
            <h2>Looking closely at ordinary systems</h2>
            <div className="profile-section-split profile-section-split--research">
              <div className="research-list">
                {researchProjects.map((project) => {
                  const isDocumentary = project.meta.includes('DOCUMENTARY')
                  return (
                  <article key={project.title} className="research-item">
                    <p className="project-index">{isDocumentary ? 'Documentary 01 · Watch & listen' : 'Research 01 · Read the record'}</p>
                    <h3>{project.title}</h3>
                    <p className="item-meta">{project.meta}</p>
                    <p>{project.summary}</p>
                    <div className="research-detail">
                      <strong>Research question</strong>
                      <p>{project.question}</p>
                    </div>
                    <div className="research-detail">
                      <strong>Current stage</strong>
                      <p>{project.finding}</p>
                    </div>
                    <ul className="inline-tags" aria-label="Research methods and themes">
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    {project.articleSlug && (
                      <Link to={`/writing/${project.articleSlug}`} className="text-link">
                        Read selected research note <ArrowRight aria-hidden="true" size={18} />
                      </Link>
                    )}
                  </article>
                  )
                })}
              </div>
              <SectionFigure
                src="./images/profile-research-working-notes.webp"
                alt="Working notes for the public-toilet policy study, including hypotheses about labour costs and annotated source excerpts"
                width={1558}
                height={1200}
                title="Working notes"
                caption="Hypotheses and source excerpts from the comparative public-toilet study."
                className="profile-side-figure--sticky"
              />
            </div>
          </section>

          <section id="learning" className="profile-section">
            <h2>Programs, projects & independent study</h2>
            <div className="profile-section-split">
              <div className="timeline">
                {learningJourney.map((item) => (
                  <article key={`${item.period}-${item.title}`} className="timeline-item">
                    <p className="timeline-period">{item.period}</p>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="item-subtitle">{item.subtitle}</p>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
              <SectionFigure
                src="./images/profile-risk-pilot-demo.webp"
                alt="Risk-Pilot project sign, printed materials, and a laptop demonstration displayed among other student project stalls"
                width={1080}
                height={1440}
                title="Risk-Pilot in demonstration"
                caption="Project materials and a laptop demonstration from the X-Academy project."
              />
            </div>
          </section>

          <section id="leadership" className="profile-section">
            <h2>Responsibility, made visible</h2>
            <p className="section-intro">
              I understand leadership less as representing a community from the front than as listening carefully, organizing patiently, and taking responsibility when the work becomes difficult.
            </p>
            <div className="profile-section-split">
              <div className="leadership-list">
                {leadership.map((item) => (
                  <article key={item.role}>
                    <h3>{item.role}</h3>
                    <p className="item-meta">{item.period}</p>
                    <p className="item-subtitle">{item.organization}</p>
                    <p>{item.description}</p>
                    <ul className="contribution-list">
                      {item.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                    </ul>
                    {item.role === 'Student Council President' && (
                      <LeadershipFigure
                        src="./images/kindergarten-english-reading.webp"
                        alt="Student council members reading English books with kindergarten children at school"
                        width={1200}
                        height={800}
                        title="Reading with younger students"
                        caption="A student council visit to read English books with children at the school’s kindergarten."
                      />
                    )}
                    {item.role === 'Delegate & Bloc Leader' && (
                      <div className="leadership-mun-gallery" aria-label="Model United Nations conference photographs">
                        <LeadershipFigure
                          src="./images/mun-delegate-discussion.webp"
                          alt="ChunYin Shang seated behind a China nameplate, discussing a position with another Model United Nations delegate"
                          width={1800}
                          height={829}
                          title="Yale MUN China"
                          caption="Discussing a position with another delegate."
                        />
                        <LeadershipFigure
                          src="./images/mun-delegate-bloc-leader-02.jpg"
                          alt="ChunYin Shang with fellow Model United Nations delegates behind country nameplates including China"
                          width={1316}
                          height={1002}
                          title="Yale MUN China"
                          caption="With fellow delegates and partner delegations."
                        />
                        <LeadershipFigure
                          src="./images/mun-delegate-bloc-leader-03.jpg"
                          alt="ChunYin Shang with participating delegates at the 2025 Global Youth Shanghai Diplomats Summit"
                          width={1620}
                          height={1080}
                          title="Global Youth Shanghai Diplomats Summit · SISU"
                          caption="With participating delegates at the 2025 summit."
                        />
                      </div>
                    )}
                  </article>
                ))}
              </div>
              <SectionFigure
                src="./images/profile-student-activity-hosting.webp"
                alt="ChunYin Shang holding a microphone while hosting a Halloween-themed activity with a room of students"
                width={1706}
                height={1279}
                title="Hosting a student activity"
                caption="A Halloween-themed event with participating students."
              />
            </div>
          </section>

          <section id="education" className="profile-section">
            <h2>Formal education</h2>
            <div className="profile-section-split">
              <div className="education-record">
                <div className="education-list">
                  {education.map((item) => (
                    <article key={item.school}>
                      <h3>{item.school}</h3>
                      <p className="item-meta">{item.period}</p>
                      <p>{item.credential}</p>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </div>
                <dl className="education-stats" aria-label="Academic record">
                  {profile.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt>{stat.label}</dt>
                      <dd>{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <SectionFigure
                src="./images/profile-teacher-discussion.webp"
                alt="ChunYin Shang in an in-person exchange with a teacher while fellow students work nearby"
                width={1440}
                height={1080}
                title="Learning through conversation"
                caption="An in-person exchange with a teacher and fellow students."
              />
            </div>
          </section>

          <section id="capabilities" className="profile-section">
            <h2>What I bring into a room</h2>
            <div className="profile-section-split">
              <div className="capability-list">
                {capabilities.map((group) => (
                  <div key={group.label}>
                    <h3>{group.label}</h3>
                    <ul>
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <SectionFigure
                src="./images/profile-bass-practice.webp"
                alt="ChunYin Shang seated in a classroom with a bass guitar and a small amplifier"
                width={1280}
                height={1707}
                title="Creative practice"
                caption="A quiet bass practice session."
              />
            </div>
          </section>
        </div>

        <aside className="profile-contents">
          <div className="contents-sticky">
            <p className="eyebrow">On this page</p>
            <nav aria-label="Profile sections">
              {sections.map(([id, label]) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  {label}
                </button>
              ))}
            </nav>
            <div className="contents-contact">
              <p>Based between</p>
              <strong>Hangzhou & Hong Kong</strong>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </aside>
      </main>
      <SiteFooter />
    </div>
  )
}
