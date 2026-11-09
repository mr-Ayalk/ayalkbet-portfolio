import { useEffect, useMemo, useState } from "react";
import {
  capabilities,
  education,
  experience,
  filters,
  groups,
  profile,
  projects,
  skillGroups,
} from "./data/profile";

function Blueprint({ project }) {
  if (project.layout === "equation") {
    return (
      <div className="blueprint" aria-hidden="true">
        <div className="bp-kicker">{project.diagramLabel}</div>
        <div className="equation">
          {project.nodes.map((node, index) => (
            <span key={node.title} style={{ display: "contents" }}>
              {index > 0 && <span className="eq-op">{index === 1 ? "×" : "→"}</span>}
              <span className="eq-term">{node.title}</span>
            </span>
          ))}
        </div>
        <p className="bp-note">{project.diagramNote}</p>
      </div>
    );
  }

  if (project.layout === "route") {
    return (
      <div className="blueprint" aria-hidden="true">
        <div className="bp-kicker">{project.diagramLabel}</div>
        <div className="route">
          {project.nodes.map((node, index) => (
            <span key={node.title} style={{ display: "contents" }}>
              {index > 0 && <span className="route-line" />}
              <span className="stop">
                <strong>{node.title}</strong>
                <span>{node.detail}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (project.layout === "rows") {
    return (
      <div className="blueprint" aria-hidden="true">
        <div className="bp-kicker">{project.diagramLabel}</div>
        <div className="rows">
          {project.nodes.map((node) => (
            <div className="bp-row" key={node.title}>
              <strong>{node.title}</strong>
              <span>{node.detail}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="blueprint" aria-hidden="true">
      <div className="bp-kicker">{project.diagramLabel}</div>
      <div className={project.nodes.length === 2 ? "tiles two" : "tiles"}>
        {project.nodes.map((node) => (
          <div className="tile" key={node.title}>
            <strong>{node.title}</strong>
            <span>{node.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Blueprint project={project} />
      <div className="project-body">
        <div className="card-meta">
          <span className="kicker">{project.kicker}</span>
          <span className="kind">{project.kind}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.role !== "End-to-end product build" && <p className="role">{project.role}</p>}
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

const nav = [
  ["#work", "Work"],
  ["#about", "About"],
  ["#expertise", "Skills"],
  ["#experience", "Experience"],
  ["#education", "Education"],
];

const themes = [
  { id: "paper", label: "Paper" },
  { id: "night", label: "Night" },
  { id: "navy", label: "Navy" },
  { id: "sand", label: "Sand" },
];

function storedTheme() {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    return themes.some((item) => item.id === saved) ? saved : "paper";
  } catch {
    return "paper";
  }
}

export default function App() {
  const [filter, setFilter] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
    if (meta && color) meta.setAttribute("content", color);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* storage can be blocked; the choice still applies for this visit */
    }
  }, [theme]);

  const visibleCount = useMemo(
    () =>
      projects.filter((project) => filter === "all" || project.filters.includes(filter)).length,
    [filter]
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip" href="#work">
        Skip to selected work
      </a>
      <header className="nav-shell">
        <nav className="wrap" aria-label="Main">
          <a className="brand" href="#top" aria-label="Ayalkbet Teketel, back to top">
            <span className="brand-mark">A.</span>
            <span className="brand-name">
              Ayalkbet Teketel
              <small>Software · AI · Systems</small>
            </span>
          </a>
          <div className="nav-tools">
            <label className="theme-label">
              Theme
              <select
                aria-label="Color theme"
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
              >
                {themes.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="nav-links"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
          <div className={menuOpen ? "nav-links open" : "nav-links"} id="nav-links">
            {nav.map(([href, label]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let’s talk
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="availability">
                <i /> Open to roles and collaborations
              </div>
              <div className="eyebrow" style={{ marginTop: 22 }}>
                Software engineer · Computer engineering
              </div>
              <h1>
                I build software that <em>organizations can run.</em>
              </h1>
              <p className="hero-copy">
                I am Ayalkbet Teketel, a fifth-year Electrical and Computer Engineering student at
                Addis Ababa University, majoring in Computer Engineering. For four years I have
                designed and shipped software for institutions, startups, and clients — SaaS
                platforms, AI products, and connected systems — from architecture through
                deployment.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#work">
                  See selected work
                </a>
                <a className="btn btn-secondary" href={profile.cv}>
                  Download CV
                </a>
              </div>
              <div className="proof">
                <span>
                  <b>45+</b> projects delivered
                </span>
                <i className="dot" />
                <span>
                  <b>4 years</b> shipping
                </span>
                <i className="dot" />
                <span>
                  <b>AAU</b> Computer Engineering
                </span>
                <i className="dot" />
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="orb" />
              <div className="console">
                <div className="console-top">
                  <span>Ayalkbet / engineering.log</span>
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <div className="console-body">
                  <div className="console-kicker">How I take on work</div>
                  <h2>From a need to a system.</h2>
                  <p>SaaS for real operations, AI where it helps a task, and hardware when the product leaves the browser.</p>
                  <div className="code">
                    <div>
                      <span className="k">const</span> engineer = {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;focus: [<span className="n">"SaaS"</span>, <span className="n">"AI"</span>,{" "}
                      <span className="n">"IoT"</span>],
                    </div>
                    <div>
                      &nbsp;&nbsp;stack: [<span className="n">"TypeScript"</span>, <span className="n">"Java"</span>,{" "}
                      <span className="n">"Python"</span>],
                    </div>
                    <div>
                      &nbsp;&nbsp;standard: <span className="s">"architect → build → ship"</span>
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div className="console-foot">
                    <span>
                      Now <strong>Negarit AI</strong>
                    </span>
                    <span>Addis Ababa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="At a glance">
          <div className="wrap metric-grid">
            <div className="metric">
              <strong>45+</strong>
              <span>Production projects delivered</span>
            </div>
            <div className="metric">
              <strong>4 yrs</strong>
              <span>Hands-on client and team work</span>
            </div>
            <div className="metric">
              <strong>17</strong>
              <span>Systems featured on this page</span>
            </div>
            <div className="metric">
              <strong>2027</strong>
              <span>AAU graduation, February</span>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Selected work</div>
                <h2>Systems I would walk you through.</h2>
              </div>
              <p>
                Most of these are SaaS products for real operations. The rest are AI products,
                connected hardware, and client builds. The wider record is 45+ projects.
              </p>
            </div>
            <div className="filters" role="group" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={filter === item.id ? "filter active" : "filter"}
                  aria-pressed={filter === item.id}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="result-line" aria-live="polite">
              Showing {visibleCount} {visibleCount === 1 ? "system" : "systems"}.
            </p>

            {groups.map((group) => {
              const items = projects.filter(
                (project) =>
                  project.group === group.id &&
                  (filter === "all" || project.filters.includes(filter))
              );
              if (!items.length) return null;
              return (
                <div className="work-group" key={group.id}>
                  <div className="group-head">
                    <h3>{group.title}</h3>
                    {filter === "all" && <p className="group-copy">{group.text}</p>}
                  </div>
                  <div className="project-grid">
                    {items.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap about-grid">
            <aside className="about-aside">
              <img
                className="portrait"
                src="/ayalk.jpg"
                width="112"
                height="112"
                alt="Portrait of Ayalkbet Teketel"
              />
              <div className="eyebrow" style={{ marginTop: 22 }}>
                About
              </div>
              <h2>An engineer who stays through delivery.</h2>
              <p>
                I like the point where a practical problem becomes software someone can rely on —
                and the point where that software has to meet a device.
              </p>
              <div className="signature">
                <span>
                  Ayalkbet Teketel
                  <small>{profile.location}</small>
                </span>
              </div>
            </aside>
            <div className="about-content">
              <p className="about-lead">
                I am in my fifth year of Electrical and Computer Engineering at Addis Ababa
                University, majoring in Computer Engineering, and I am also studying Computer
                Science at University of the People. The last four years have been spent building
                for institutions, startups, and individuals, usually from the first conversation
                to working software.
              </p>
              <p className="about-detail">
                The part I protect is the part that lets the next change be safe: a structure
                another engineer can follow, APIs and data that stay coherent, and a real path to
                deployment. That same standard applies when the product leaves the browser — a
                controller, a sensor, or a pair of glasses. Day to day I work in JavaScript and
                TypeScript, Java, and Python, with React and Next.js on the interface, Node,
                Spring Boot, and FastAPI on the service, and React Native when the product is
                mobile. Flutter is a basic working knowledge.
              </p>
              <div className="capability-grid">
                {capabilities.map((item) => (
                  <article className="capability" key={item.index}>
                    <div className="num">{item.index}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Technical expertise</div>
                <h2>The toolkit I actually ship with.</h2>
              </div>
              <p>
                These are working tools, not a wishlist. Depth is strongest in full-stack web,
                then AI features and computer-engineering systems.
              </p>
            </div>
            <div className="skill-layout">
              {skillGroups.map((group) => (
                <article className="skill-panel" key={group.title}>
                  <h3>
                    <span>{group.index}</span>
                    {group.title}
                  </h3>
                  <div className="skill-list">
                    {group.items.map((item) => (
                      <span className="skill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <p className="skill-note">
              Game development shows up in the Bingo desktop app. Web3 is an area I explore; it is
              not a core delivery stack.
            </p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Experience</div>
                <h2>Roles, contracts, and the work between them.</h2>
              </div>
              <p>
                Professional, contract, and freelance work across product engineering, team
                leadership, and AI. Several contracts overlap. That is how the work was scheduled.
              </p>
            </div>
            <ol className="timeline">
              {experience.map((item) => (
                <li key={`${item.org}-${item.dates}`}>
                  <div>
                    <h3>{item.role}</h3>
                    <div className="org">{item.org}</div>
                    <div className="meta">{item.meta}</div>
                    <p>{item.summary}</p>
                  </div>
                  <div className="dates">{item.dates}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="education">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Education</div>
                <h2>Formal training, still in progress.</h2>
              </div>
              <p>A computer engineering degree at Ethiopia’s leading university, a second degree in computer science, and a full-stack bootcamp.</p>
            </div>
            <div className="edu-grid">
              {education.map((item) => (
                <article className="edu-card" key={item.title}>
                  <div className="edu-type">{item.type}</div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <small>{item.detail}</small>
                </article>
              ))}
            </div>
            <div className="achievement">
              <div>
                <strong>Winner — Cursor AI Hackathon</strong>
                <p>Recognized for building an AI-powered application under a time limit.</p>
              </div>
              <div className="award" aria-hidden="true">
                ✦
              </div>
            </div>
            <p className="languages">
              <b>Languages.</b> English, professional. Amharic, native. Afan Oromo, beginner.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap">
            <div className="contact-box">
              <div className="eyebrow">Contact</div>
              <h2>If the work should exist in the real world, I want the brief.</h2>
              <p>
                I am interested in software engineering roles, product collaborations, and systems
                where careful engineering changes how an institution, a clinic, a school, or a
                device actually runs.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  Email Ayalkbet
                </a>
                <a className="btn btn-secondary" href={profile.cv}>
                  Download CV
                </a>
              </div>
              <div className="contact-details">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={`tel:${profile.phoneHref}`}>{profile.phoneDisplay}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-row">
          <span>© 2026 Ayalkbet Teketel. Addis Ababa, Ethiopia.</span>
          <div className="footer-links">
            <a href="#top">Back to top</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
