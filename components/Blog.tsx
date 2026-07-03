import { blog } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";

export function Blog() {
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <span className="eyebrow">{blog.eyebrow}</span>
            <AnimatedHeading as="h2" className="section-title" text={blog.title} />
          </div>
          <a href={blog.cta.href} className="btn btn--outline">{blog.cta.label}</a>
        </div>

        <div className="blog__grid">
          {blog.posts.map((p) => (
            <article className="post-card cursor-hover" key={p.title}>
              <a href={p.href} className="post-card__img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} />
              </a>
              <div className="post-card__body">
                <h3><a href={p.href}>{p.title}</a></h3>
                <a href={p.href} className="post-card__link">Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
