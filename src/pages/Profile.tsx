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
  ['activities', 'Activities'],
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
            <h2>Looking closely at ordinary systems</h2>
            <div className="research-list">
              {researchProjects.map((project) => (
                <article key={project.title} className="research-item">
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
                </article>
              ))}
            </div>
          </section>

          <section id="learning" className="profile-section">
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
            <h2>Responsibility, made visible</h2>
            <p className="section-intro">
              I understand leadership less as representing a community from the front than as listening carefully, organizing patiently, and taking responsibility when the work becomes difficult.
            </p>
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
                </article>
              ))}
            </div>

            <section className="speaking-evidence" aria-labelledby="speaking-evidence-title">
              <div className="speaking-evidence-heading">
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
                    <h4>Delivering a committee speech</h4>
                    <p className="photo-meta">Model United Nations · 2025</p>
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
                    <h4>China’s return to the United Nations</h4>
                    <p className="photo-meta">Academic presentation · SFLSHZ</p>
                    <p>Presenting at Shanghai Foreign Language School Affiliated to SISU, Hangzhou, connecting historical inquiry with public communication.</p>
                  </figcaption>
                </figure>
              </div>
            </section>
          </section>

          <section id="activities" className="profile-section activities-section" aria-labelledby="activities-title">
            <h2 id="activities-title">Beyond the classroom</h2>
            <p className="section-intro">
              Debate, summer programs, music, and sport keep my education connected to other people—through negotiation, performance, teamwork, and shared responsibility.
            </p>
            <div className="activity-mosaic">
              <figure>
                <img
                  src="./images/mun-delegate-discussion.webp"
                  alt="ChunYin Shang seated behind a China nameplate, discussing a position with another Model United Nations delegate"
                  width="1800"
                  height="829"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>Negotiation, not just speeches</h3>
                  <p className="photo-meta">Model United Nations</p>
                  <p>Discussing a position with another delegate during a committee session.</p>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="./images/panel-discussion.webp"
                  alt="ChunYin Shang speaking into a microphone during a seated panel discussion"
                  width="1279"
                  height="1706"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>Listening and responding</h3>
                  <p className="photo-meta">Panel discussion · SFLSHZ</p>
                  <p>Contributing to a seated discussion with fellow students.</p>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="./images/summer-program-group.webp"
                  alt="ChunYin Shang with a group of peers during a summer learning program"
                  width="1432"
                  height="1110"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>Learning in a cohort</h3>
                  <p className="photo-meta">Summer learning program</p>
                  <p>Sharing the experience with a peer group.</p>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="./images/school-event-speaking.webp"
                  alt="ChunYin Shang speaking on stage with a fellow student during a school event"
                  width="1440"
                  height="981"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>Sharing the stage</h3>
                  <p className="photo-meta">School event</p>
                  <p>Speaking on stage with a fellow student.</p>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="./images/piano-performance.webp"
                  alt="ChunYin Shang performing piano on stage at a school concert"
                  width="1080"
                  height="1440"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>Performance and discipline</h3>
                  <p className="photo-meta">Piano</p>
                  <p>Performing at a school concert.</p>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="./images/football-team.webp"
                  alt="ChunYin Shang posing with football teammates on the school pitch"
                  width="1440"
                  height="1080"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>Part of a team</h3>
                  <p className="photo-meta">Football</p>
                  <p>With teammates on the school pitch.</p>
                </figcaption>
              </figure>
            </div>
          </section>

          <section id="education" className="profile-section">
            <h2>Formal education</h2>
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
          </section>

          <section id="capabilities" className="profile-section">
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
