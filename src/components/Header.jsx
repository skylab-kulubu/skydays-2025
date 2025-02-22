import skylablogo from "../assets/skylab_logo.webp";
import "./Header.css";

const scrollToElement = (element) => {
  // This code scrolls to desired element using "ID", More Info : https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  const scrollingElement = document.querySelector(`.${element}`);
  if (scrollingElement) {
    scrollingElement.scrollIntoView({
      behavior: "smooth",
    });
  } else {
    return;
  }
};

function Header() {
  return (
    <header>
      <img src={skylablogo} alt="Skylab Kulüp Logosu" />
      <nav>
        <button onClick={() => scrollToElement("welcome")}>Ana Sayfa</button>
        <button onClick={() => scrollToElement("about")}>Hakkımızda</button>
        <button onClick={() => scrollToElement("speakers")}>
          Konuşmacılar
        </button>
        <button onClick={() => scrollToElement("sponsors")}>
          Sponsorlarımız
        </button>
        <button onClick={() => scrollToElement("ctf")}>CFT</button>
        <button onClick={() => scrollToElement("sss")}>S.S.S.</button>
      </nav>
      <h1>SKYDAYS</h1>
      <a href="https://skyl.app/skydays-katilimci-formu">Başvur</a>
    </header>
  );
}

export default Header;
