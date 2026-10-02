import Gallery from "../../components/Gallery";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section className="section">
      <h1 className="page-title">Gallery</h1>
      <p className="lede">Generative prints I made while learning color and layout. Select one to view it larger, then use the arrow keys to browse.</p>
      <Gallery />
    </section>
  );
}
