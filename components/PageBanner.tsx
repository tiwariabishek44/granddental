import { AnimatedHeading } from "./motion/AnimatedHeading";

type Crumb = { label: string; href?: string };

export function PageBanner({ title, crumbs }: { title: string; crumbs: Crumb[] }) {
  return (
    <section className="page-banner">
      <div className="container page-banner__inner">
        <AnimatedHeading as="h1" className="page-banner__title" text={title} />
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.label} className="breadcrumb__item">
              {c.href ? <a href={c.href}>{c.label}</a> : <span aria-current="page">{c.label}</span>}
              {i < crumbs.length - 1 && <span className="breadcrumb__sep">›</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
