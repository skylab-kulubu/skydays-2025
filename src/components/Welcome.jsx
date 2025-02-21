import "./Welcome.css";
import SkyDaysLogo from "../assets/skydayslogo.png";
import Canvas from "./Canvas";

function Welcome() {
  return (
    <article className="welcome">
      <Canvas className="canvas-background" />
      <div className="welcome-skydays">
        <img
          style={{ width: "150px" }}
          src={SkyDaysLogo}
          alt="SkyDays Yarışma Logosu"
        />
        <h1>SKYDAYS</h1>
        <p>Türkiye'nin En Büyük Siber Güvenlik Etkinliği</p>
      </div>

      <button>Hemen Başvur!</button>

      <div className="welcome-footer">
        <p>14-15 Mart 2025</p>
        <p>
          YTÜ Davutpaşa <br /> Tarihi Hamam
        </p>
      </div>
    </article>
  );
}

export default Welcome;
