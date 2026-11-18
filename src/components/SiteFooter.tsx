import { ArrowUpRight } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="footer-kicker">A continuing education</p>
      <p className="footer-statement">Read closely.<br />Ask carefully.<br />Contribute concretely.</p>
      <div className="footer-bottom">
        <p>ChunYin Shang · Hangzhou ↔ Hong Kong</p>
        <a href="mailto:khelilshang78@gmail.com">
          khelilshang78@gmail.com <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </div>
    </footer>
  )
}
