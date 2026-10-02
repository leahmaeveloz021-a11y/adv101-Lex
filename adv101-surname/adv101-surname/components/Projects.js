"use client";
import { useState } from "react";
import Art from "./Art";
import { site } from "../data/site";

export default function Projects() {
  const types = ["All", "Web", "Mobile", "Design"];
  const [filter, setFilter] = useState("All");
  const list = site.projects.map((p, i) => ({ ...p, i })).filter((p) => filter === "All" || p.type === filter);
  return (
    <>
      <div className="chips" role="group" aria-label="Filter projects">
        {types.map((t) => (
          <button key={t} className={t === filter ? "chip on" : "chip"} onClick={() => setFilter(t)} aria-pressed={t === filter}>{t}</button>
        ))}
      </div>
      <div className="grid">
        {list.map((p) => (
          <article key={p.title} className="card">
            <Art seed={p.i + 3} label={`Artwork for ${p.title}`} />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <p className="meta">{p.type}, {p.year}. Built with {p.stack.join(", ")}.</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
