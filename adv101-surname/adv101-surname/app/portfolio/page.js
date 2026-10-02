import Projects from "../../components/Projects";

export const metadata = { title: "Portfolio" };

export default function Portfolio() {
  return (
    <section className="section">
      <h1 className="page-title">Portfolio</h1>
      <p className="lede">Class work, side projects and one real client. Filter by the kind of work you want to see.</p>
      <Projects />
    </section>
  );
}
