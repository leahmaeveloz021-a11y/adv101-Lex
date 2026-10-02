import Link from "next/link";
import Art from "../components/Art";
import { site } from "../data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="blobs" aria-hidden="true"><i className="b1" /><i className="b2" /><i className="b3" /></div>
        <p className="hero-role">{site.role}</p>
        <h1>Hello, I'm {site.name.split(" ")[0]}. I make websites that are easy to use.</h1>
        <p className="lede">{site.intro}</p>
        <div className="actions">
          <Link className="btn primary" href="/portfolio">See my projects</Link>
          <Link className="btn" href="/about">About me</Link>
        </div>
      </section>
      <section className="section">
        <div className="row"><h2>Recent work</h2><Link href="/portfolio" className="textlink">All projects</Link></div>
        <div className="grid">
          {site.projects.slice(0, 3).map((p, i) => (
            <article key={p.title} className="card">
              <Art seed={i + 3} label={`Artwork for ${p.title}`} />
              <div className="card-body"><h3>{p.title}</h3><p>{p.text}</p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
