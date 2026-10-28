import Logo, { Mark } from "./components/Logo.jsx";
import Icon from "./components/Icon.jsx";
import { brand, nav, hero, chooseList, services, stats, certs, about, work } from "./content.js";

const Btn = ({ href, kind = "peach", children, ...rest }) => (
  <a className={`btn btn-${kind}`} href={href} {...rest}>{children}</a>
);

const Check = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

function Header() {
  return (
    <header className="site">
      <div className="wrap">
        <Logo />
        <nav aria-label="Primary">
          {nav.map((n) => <a key={n.href} href={n.href} aria-current={n.current ? "page" : undefined}>{n.label}</a>)}
        </nav>
        <div className="hdr-right">
          <a className="phone" href={brand.phoneHref}><Icon name="phone" size={18} /> {brand.phone}</a>
          <Btn href="#inspection" kind="pine">Get a Free Inspection</Btn>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{hero.tag}</p>
          <h1>{hero.title}</h1>
          <p className="lede">{hero.lede}</p>
          <div className="ctas">
            <Btn href="#inspection">Get a Free Inspection <Icon name="arrow" size={18} /></Btn>
            <Btn href="#financing" kind="outline">Financing Options</Btn>
          </div>
        </div>
        <figure className="hero-fig">
          <img src={hero.image.src} alt={hero.image.alt} fetchPriority="high" />
        </figure>
      </div>
      <ul className="pillars wrap" aria-label="How we work">
        {hero.pillars.map((p) => <li key={p}><Check />{p}</li>)}
      </ul>
    </section>
  );
}

function Reviews() {
  return (
    <section className="reviews">
      <div className="wrap">
        <div>
          <p className="eyebrow">What our customers say</p>
          <h2>Atlanta homeowners rate us five stars, again and again.</h2>
        </div>
        <div className="stars" aria-label="Five star rating">
          {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          <Btn href="#reviews" kind="outline">See More Reviews</Btn>
        </div>
      </div>
    </section>
  );
}

function Choose() {
  return (
    <section className="choose band" id="choose">
      <div className="wrap choose-grid">
        <div className="choose-intro">
          <p className="eyebrow">Choosing a contractor</p>
          <h2>Choosing the right roofing contractor should not be this stressful.</h2>
          <p className="lede">Six things to settle before anyone sets foot on your roof.</p>
          <figure className="photo tall"><img src="/img/choose-roofer.jpg" alt="Roofer fastening a panel with a power drill" loading="lazy" /></figure>
        </div>
        <ol className="choose-list">
          {chooseList.map((c) => (
            <li key={c.title}><Check /><div><h3>{c.title}</h3><p>{c.body}</p></div></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work band" id="work">
      <div className="wrap">
        <div className="work-head">
          <div>
            <p className="eyebrow">Work Gallery</p>
            <h2>From complete re-roofing to maintenance and repairs, we can handle whatever life throws at your roof.</h2>
          </div>
          <Btn href="#work" kind="outline-light">View Projects <Icon name="arrow" size={18} /></Btn>
        </div>
        <div className="work-grid">
          {work.map((w) => (
            <figure key={w.img}><img src={w.img} alt={w.caption} loading="lazy" /><figcaption>{w.caption}</figcaption></figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services band" id="services">
      <div className="wrap">
        <p className="eyebrow">Residential Services</p>
        <h2 className="tight">Whatever Roofing Challenge Comes Up, We Handle It for You</h2>
        <div className="svc-grid">
          {services.map((s, i) => (
            <article className={"svc" + (i === 0 ? " svc-feature" : "")} key={s.title}>
              <figure><img src={s.img} alt={s.alt} loading="lazy" /></figure>
              <div className="svc-body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <a href="#inspection">Schedule a visit <Icon name="arrow" size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats band" id="certified">
      <div className="wrap">
        <p className="eyebrow">By the numbers</p>
        <h2 className="tight">{brand.name} is certified in the following residential roofing products:</h2>
        <dl className="stat-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt>{s.n}</dt>
              <dd><strong>{s.label}</strong>{s.note && <span>{s.note}</span>}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Certs() {
  return (
    <section className="certs band">
      <div className="wrap certs-list">
        {certs.map((c) => (
          <article className="cert" key={c.title}>
            <figure className="photo"><img src={c.img} alt={c.alt} loading="lazy" /></figure>
            <div className="cert-copy">
              <p className="eyebrow">{c.eyebrow}</p>
              <h3>{c.title}</h3>
              {c.paras.map((t, i) => <p key={i}>{t}</p>)}
              {c.link && <p><a href={c.link.href} target="_blank" rel="noopener">{c.link.label}</a></p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about band">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="eyebrow">{about.title}</p>
          <h2>A roof's number one goal is to protect everything underneath.</h2>
          {about.paras.map((t, i) => <p key={i}>{t}</p>)}
        </div>
        <div className="facts">
          <h3>{about.listTitle}</h3>
          <ol>{about.facts.map((f) => <li key={f}>{f}</li>)}</ol>
        </div>
      </div>
    </section>
  );
}

function Relax() {
  return (
    <section className="relax band">
      <div className="wrap relax-grid">
        <div>
          <h2>Go from stressed and uncertain to <em>Relaxed and Confident.</em></h2>
          <p className="lede">Stop worrying about your roofing projects and have a trusted team of experts you can rely on.</p>
        </div>
        <figure className="photo wide"><img src="/img/relax-home.jpg" alt="Finished roof on a home with tile detail" loading="lazy" /></figure>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final band" id="inspection">
      <div className="wrap">
        <Mark size={84} roof="var(--cream)" />
        <h2>Give us a call today to request your FREE Roof Inspection and Estimate at <a href={brand.phoneHref}>{brand.phone}</a></h2>
        <p className="lede">We guarantee a quality product and excellent customer experience.</p>
        <div className="ctas">
          <Btn href={brand.phoneHref}>Get a Free Inspection <Icon name="arrow" size={18} /></Btn>
          <Btn href="#financing" kind="outline-light" id="financing">Financing Options</Btn>
        </div>
        <p className="hq">{brand.name} · {brand.hq} · Serving the Greater Atlanta area</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Reviews />
        <Choose />
        <Work />
        <Services />
        <Stats />
        <Certs />
        <About />
        <Relax />
        <FinalCTA />
      </main>
    </>
  );
}
