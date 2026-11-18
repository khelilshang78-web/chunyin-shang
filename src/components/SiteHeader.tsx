import { NavLink } from 'react-router'

const navigation = [
  { to: '/profile', label: 'Profile' },
  { to: '/writing', label: 'Writing' },
]

export default function SiteHeader() {
  return (
    <header className="site-header">
      <NavLink to="/" className="wordmark" aria-label="ChunYin Shang — home">
        <span>ChunYin Shang</span>
        <span className="wordmark-secondary">Khelil</span>
      </NavLink>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
        <a className="nav-link nav-contact" href="mailto:khelilshang78@gmail.com">Contact</a>
      </nav>
    </header>
  )
}
