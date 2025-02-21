import "./Footer.css";
import SkylabLogo from "../assets/skylab_logo.webp";
import InstagramLogo from "../assets/InstagramLogo.svg";
import LinkedinLogo from "../assets/LinkedinLogo.svg";
import XLogo from "../assets/XLogo.svg";
import YoutubeLogo from "../assets/YoutubeLogo.svg";

function Footer() {
  return (
    <footer>
      <img src={SkylabLogo} alt="Skylab Kulüp Logosu" />
      <h3>
        Soracak başka sorularınız için{" "}
        <a href="mailto:skylab.ytu@gmail.com">skylab.ytu@gmail.com</a> mail
        adresine ulaşabilirsiniz.
      </h3>
      <div className="media-container">
        <a href="https://www.instagram.com/ytuskylab/" target="_blank">
          <img src={InstagramLogo} alt="Insta Logo" />
        </a>
        <a
          href="https://www.linkedin.com/company/ytuskylab?originalSubdomain=tr"
          target="_blank"
        >
          <img src={LinkedinLogo} alt="Linkedin Logo" />
        </a>
        <a href="https://x.com/skylabkulubu" target="_blank">
          <img src={XLogo} alt="X Logo" />
        </a>
        <a
          href="https://www.youtube.com/c/SKYLABKul%C3%BCb%C3%BC"
          target="_blank"
        >
          <img src={YoutubeLogo} alt="Youtube Logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
