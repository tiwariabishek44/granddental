"use client";
import { useEffect, useState } from "react";
import { nav, site, IMG, servicesPage } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Hide when scrolling down past the header; reveal when scrolling up.
      if (y > lastY && y > 160) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${hidden && !open ? " site-header--hidden" : ""}`} id="top">
      <div className={`header-main${scrolled ? " header-main--scrolled" : ""}`}>
        <div className="container header-main__inner">
          <a href="/" className="brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.logo} alt={site.brand} width={180} height={40} />
          </a>

          <nav className={`main-nav${open ? " main-nav--open" : ""}`}>
            <button className="main-nav__close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
            <ul>
              {nav.map((n) =>
                n.label === "Services" ? (
                  <li key={n.href} className="has-dropdown">
                    <a href={n.href} onClick={() => setOpen(false)}>
                      {n.label}
                      <svg className="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                    <ul className="dropdown">
                      {servicesPage.items.map((s) => (
                        <li key={s.slug}>
                          <a href={`/services/${s.slug}`} onClick={() => setOpen(false)}>{s.title}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={n.href}>
                    <a href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="header-main__actions">
            <a href="/contact" className="btn btn--primary">Book Now</a>
            <button className="nav-toggle" onClick={() => setOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}
