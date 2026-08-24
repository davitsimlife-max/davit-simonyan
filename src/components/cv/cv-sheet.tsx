import { capabilities, experience, projects, site, stack } from "@/lib/content";

export function CvSheet() {
  return (
    <article className="cv-sheet">
      <header className="cv-head">
        <div className="cv-brand">
          <span className="cv-mark" aria-hidden>
            D
          </span>
          <div>
            <p className="cv-kicker">{site.role}</p>
            <h1>{site.name}</h1>
          </div>
        </div>
        <ul className="cv-meta">
          <li>{site.location}</li>
          <li>
            <a href={site.url}>{site.url.replace("https://", "")}</a>
          </li>
          <li>
            <a href={site.linkedin}>{site.linkedinLabel}</a>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>English · Dutch · Russian · Armenian</li>
        </ul>
      </header>

      <p className="cv-lede">
        I learned AI <em>the only way that counts.</em>
        <span> Two live products. Looking for a team that ships — not slide decks.</span>
      </p>

      <section>
        <h2>Stack</h2>
        <p className="cv-stack">{stack.join(" · ")}</p>
      </section>

      <section>
        <h2>Selected work</h2>
        <ol className="cv-work">
          {projects.map((project) => (
            <li key={project.id}>
              <div className="cv-work-top">
                <p className="cv-index">{project.index}</p>
                <div className="cv-work-copy">
                  <div className="cv-work-title">
                    <h3>{project.name}</h3>
                    <p>
                      {project.status} · {project.year}
                    </p>
                  </div>
                  <p className="cv-tag">{project.tagline}</p>
                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a href={project.href}>{project.hrefLabel}</a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Experience</h2>
        <ul className="cv-exp">
          {experience.map((job) => (
            <li key={job.org} className={job.quiet ? "quiet" : undefined}>
              <div className="cv-exp-top">
                <h3>
                  {job.org}
                  <span>{job.role}</span>
                </h3>
                <p>{job.dates}</p>
              </div>
              <p>{job.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Capabilities</h2>
        <ul className="cv-cap-grid">
          {capabilities.map((cap) => (
            <li key={cap.title}>
              <h3>{cap.title}</h3>
              <p>{cap.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="cv-foot">
        <p>
          Work, live — <a href={site.url}>{site.url.replace("https://", "")}</a>
        </p>
        <p>Available — AI builder. Looking for a team that ships.</p>
      </footer>
    </article>
  );
}
