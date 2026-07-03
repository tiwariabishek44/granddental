import { footer, site, IMG } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <a href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.footerLogo} alt={site.brand} width={180} height={40} />
          </a>
          <p>{footer.tagline}</p>
          <div className="site-footer__contact">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>

        <FooterCol title="Quick Links" links={footer.quickLinks} />
        <FooterCol title="Socials" links={footer.socials} />
        <FooterCol title="Our Services" links={footer.services} />
      </div>

      <div className="container site-footer__bottom">
        <p>{footer.copyright}</p>
        <ul>
          {footer.legal.map((l) => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="site-footer__col">
      <h3>{title}</h3>
      <ul>
        {links.map((l) => (
          <li key={l.label}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
