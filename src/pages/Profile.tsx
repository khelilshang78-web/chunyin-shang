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

export default function Profile() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="profile-grid">
        <aside className="profile-identity">
          <div className="identity-sticky">
            <img src="./images/chunyin-shang.jpg" alt="ChunYin Shang" className="profile-photo" />
            <p className="eyebrow">Personal profile</p>
            <h1>{profile.name}</h1>
            <p className="preferred-name">Also known as {profile.preferredName}</p>
            <p className="identity-location">{profile.location}</p>
          </div>
        </aside>

        <div className="profile-content">
          <section className="profile-intro" aria-labelledby="intro-title">
            <p className="eyebrow">Student · Researcher · Student leader</p>
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

          <section className="stats-row" aria-label="Academic snapshot">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </section>

          <section id="direction" className="profile-section">
            <p className="section-number">01 / Academic direction</p>
            <h2>Questions before labels</h2>
            <p className="section-intro">
              My interests sit across PPE, STS, public policy, political science, and sociology. These are the questions currently giving those fields a common direction.
            </p>
            <div className="interest-list">
              {academicInterests.map((interest) => (
                <article key={interest.title}>
                  <h3>{interest.title}</h3>
                  <p className="interest-question">{interest.question}</p>
                  <p>{interest.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="research" className="profile-section">
            <p className="section-number">02 / Research & inquiry</p>
            <h2>Looking closely at ordinary systems</h2>
            <div className="research-list">
              {researchProjects.map((project) => (
                <article key={project.title} className="research-item">
                  <p className="item-meta">{project.meta}</p>
                  <h3>{project.title}</h3>
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
                </article>
              ))}
            </div>
          </section>

          <section id="learning" className="profile-section">
            <p className="section-number">03 / Learning journey</p>
            <h2>Programs, projects & independent study</h2>
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
          </section>

          <section id="leadership" className="profile-section">
            <p className="section-number">04 / Leadership & contribution</p>
            <h2>Responsibility, made visible</h2>
            <p className="section-intro">
              I understand leadership less as representing a community from the front than as listening carefully, organizing patiently, and taking responsibility when the work becomes difficult.
            </p>
            <div className="leadership-list">
              {leadership.map((item) => (
                <article key={item.role}>
                  <p className="item-meta">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="item-subtitle">{item.organization}</p>
                  <p>{item.description}</p>
                  <ul className="contribution-list">
                    {item.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                  </ul>
                </article>
              ))}
            </div>

            <section className="speaking-evidence" aria-labelledby="speaking-evidence-title">
              <div className="speaking-evidence-heading">
                <p className="item-meta">In practice</p>
                <h3 id="speaking-evidence-title">Public speaking in context</h3>
              </div>
              <div className="speaking-gallery">
                <figure>
                  <img
                    src="./images/model-united-nations-speech.jpg"
                    alt="ChunYin Shang delivering a Model United Nations committee speech at a wooden podium"
                    width="1620"
                    height="1080"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <p className="photo-meta">Model United Nations · 2025</p>
                    <h4>Delivering a committee speech</h4>
                    <p>Speaking as a student delegate at a session hosted by Shanghai International Studies University, with country positions and committee motions displayed behind the podium.</p>
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src="./images/china-un-presentation.jpg"
                    alt="ChunYin Shang presenting on China’s return to the United Nations at SFLSHZ"
                    width="1280"
                    height="853"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <p className="photo-meta">Academic presentation · SFLSHZ</p>
                    <h4>China’s return to the United Nations</h4>
                    <p>Presenting at Shanghai Foreign Language School Affiliated to SISU, Hangzhou, connecting historical inquiry with public communication.</p>
                  </figcaption>
                </figure>
              </div>
            </section>
          </section>

          <section id="education" className="profile-section">
            <p className="section-number">05 / Education</p>
            <h2>Formal education</h2>
            <div className="education-list">
              {education.map((item) => (
                <article key={item.school}>
                  <p className="item-meta">{item.period}</p>
                  <h3>{item.school}</h3>
                  <p>{item.credential}</p>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="capabilities" className="profile-section">
            <p className="section-number">06 / Capabilities & interests</p>
            <h2>What I bring into a room</h2>
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
