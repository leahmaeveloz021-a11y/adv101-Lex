import { site } from "../../data/site";

export const metadata = { title: "About" };

export default function About() {
  return (
    <section className="section">
      <h1 className="page-title">About</h1>
      <div className="about">
        <div>
          <p className="lede">I'm a college student learning to build for the web. I like projects where a clear layout and a few careful details make something feel friendly.</p>
          <p>Most of what I know came from rebuilding things I use every day. When I'm not coding I'm sketching interface ideas, printing posters, or finding the best coffee near campus.</p>
          <h2>Timeline</h2>
          <ol className="timeline">
            {site.timeline.map(([y, t]) => (<li key={y}><b>{y}</b><span>{t}</span></li>))}
          </ol>
        </div>
        <aside>
          {Object.entries(site.skills).map(([group, items]) => (
            <div key={group} className="skillgroup">
              <h3>{group}</h3>
              <ul>{items.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
          <div className="contact">
            <h3>Say hello</h3>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.github}>GitHub profile</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
