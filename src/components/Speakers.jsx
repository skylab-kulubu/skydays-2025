import "./Speakers.css";
import SkylabImage from "../assets/skylab_logo.webp";

function Speakers() {
  return (
    <article className="speakers">
      <h2>Konuşmacılar</h2>
      <section className="speakers-container">
        <figure className="speaker">
          <img src={SkylabImage} alt="Konuşmacı" />
          <figcaption>
            <h3>Yakında Açıklanacak</h3>
            <p></p>
          </figcaption>
        </figure>
        <figure className="speaker">
          <img src={SkylabImage} alt="Konuşmacı" />
          <figcaption>
            <h3>Yakında Açıklanacak</h3>
            <p></p>
          </figcaption>
        </figure>
        <figure className="speaker">
          <img src={SkylabImage} alt="Konuşmacı" />
          <figcaption>
            <h3>Yakında Açıklanacak</h3>
            <p></p>
          </figcaption>
        </figure>
        <figure className="speaker">
          <img src={SkylabImage} alt="Konuşmacı" />
          <figcaption>
            <h3>Yakında Açıklanacak</h3>
            <p></p>
          </figcaption>
        </figure>
        <figure className="speaker">
          <img src={SkylabImage} alt="Konuşmacı" />
          <figcaption>
            <h3>Yakında Açıklanacak</h3>
            <p></p>
          </figcaption>
        </figure>
        <figure className="speaker">
          <img src={SkylabImage} alt="Konuşmacı" />
          <figcaption>
            <h3>Yakında Açıklanacak</h3>
            <p></p>
          </figcaption>
        </figure>
      </section>
    </article>
  );
}

export default Speakers;
