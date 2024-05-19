import Cards from "../components/Cards/cards.jsx";
import Title from "../components/Title/title.jsx";
import music from "../assets/music.mp3";

import bannerLimit from "../assets/limit_banner.gif";
import bannerDiorio from "../assets/banner_diorio.gif";
import perfLimit from "../assets/limit_perf.png";
import perfDiorio from "../assets/perf_diorio.jpg";

import "./App.css";

function App() {
  return (
    <>
      <audio src={music} autoPlay loop></audio>
      <div className="header">
        <Title />
      </div>
      <div className="cards">
        <Cards
          banner={bannerLimit}
          perf={perfLimit}
          nome={"Limiteira"}
          desc1={"Comi sua mamãe"}
          desc2={"Estupro os outros hahahah."}
          link2={"https://discord.com/channels/@me/1131635650391711854"}
          icon2={"logo-discord"}
          link3={"https://www.instagram.com/ygnsantos/"}
          icon3={"logo-instagram"}
        ></Cards>
        <Cards
          banner={bannerDiorio}
          perf={perfDiorio}
          nome={"Diorioo"}
          desc1={"Gurizinho de programa"}
          desc2={"Paz..."}
          link={"https://github.com/di0rio"}
          icon={"logo-github"}
          link2={"https://discord.com/channels/@me/568915433160179713"}
          icon2={"logo-discord"}
          link3={"https://www.instagram.com/di0riocaua/"}
          icon3={"logo-instagram"}
          link4={"https://www.linkedin.com/in/cau%C3%A3-di%C3%B3rio-245013296/"}
          icon4={"logo-linkedin"}
        ></Cards>
      </div>
    </>
  );
}

export default App;
