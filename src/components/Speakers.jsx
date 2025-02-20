import "./Speakers.css";
import SpeakerImage from "../assets/konusmaci.png";

function Speakers() {
  return (
    <article className="speakers">
      <h2>Konuşmacılar</h2>
      <section className="speakers-container">
        <figure className="speaker">
          <img src={SpeakerImage} alt="Konuşmacı" />
          <figcaption>
            <h3>İsim Soyisim</h3>
            <p>Pozisyon</p>
          </figcaption>
        </figure>
        <figure className="speaker">
          <img src={SpeakerImage} alt="Konuşmacı" />
          <figcaption>
            <h3>İsim Soyisim</h3>
            <p>Pozisyon</p>
          </figcaption>
        </figure>
        <figure className="speaker">
          <img src={SpeakerImage} alt="Konuşmacı" />
          <figcaption>
            <h3>İsim Soyisim</h3>
            <p>Pozisyon</p>
          </figcaption>
        </figure>
        <figure className="speaker">
          <img src={SpeakerImage} alt="Konuşmacı" />
          <figcaption>
            <h3>İsim Soyisim</h3>
            <p>Pozisyon</p>
          </figcaption>
        </figure>
        <figure className="speaker">
          <img src={SpeakerImage} alt="Konuşmacı" />
          <figcaption>
            <h3>İsim Soyisim</h3>
            <p>Pozisyon</p>
          </figcaption>
        </figure>
        <figure className="speaker">
          <img src={SpeakerImage} alt="Konuşmacı" />
          <figcaption>
            <h3>İsim Soyisim</h3>
            <p>Pozisyon</p>
          </figcaption>
        </figure>
      </section>
    </article>
  );
}

export default Speakers;
