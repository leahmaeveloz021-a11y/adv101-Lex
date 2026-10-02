"use client";
import { useEffect, useState } from "react";
import Art from "./Art";
import { site } from "../data/site";

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const n = site.gallery.length;
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o + 1) % n);
      if (e.key === "ArrowLeft") setOpen((o) => (o - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, n]);
  return (
    <>
      <div className="masonry">
        {site.gallery.map((t, i) => (
          <button key={t} className={`tile h${i % 3}`} onClick={() => setOpen(i)} aria-label={`Open ${t}`}>
            <Art seed={i + 11} label={t} />
            <span className="cap">{t}</span>
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={site.gallery[open]} onClick={() => setOpen(null)}>
          <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
            <Art seed={open + 11} label={site.gallery[open]} />
            <div className="lb-bar">
              <strong>{site.gallery[open]}</strong>
              <span>{open + 1} of {n}</span>
              <button onClick={() => setOpen((open - 1 + n) % n)}>Previous</button>
              <button onClick={() => setOpen((open + 1) % n)}>Next</button>
              <button onClick={() => setOpen(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
