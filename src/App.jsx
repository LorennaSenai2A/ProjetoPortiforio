import "./App.css";
import fotoDark from "./img/LohNoite.jpeg";
import fotoLight from "./img/LohDia.jpeg";

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";
import Cards from "./components/cards/Cards";
import projet1 from "./img/Pizzaria.jpg"
import projet2 from "./img/CyberVision.jpg"
import projet3 from "./img/BankWise.jpg"

const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <div id="container">
        <Perfil fotoPerfil={isLight ? fotoLight : fotoDark}>
          Prazer! Meu nome é Lorenna, tenho 17 anos e sou estudante de
          Desenvolvimento de Sistemas no SENAI. Gosto de tecnologia e
          design, e estou sempre buscando aprender mais sobre esses assuntos.
          Atualmente estou estudando React!
        </Perfil>

        <Switch troca={troca} isLight={isLight} />

        {/* <div id="links">
          <ul>
            <Links links={"https://github.com/LorennaSenai2A"}>GitHub</Links>
            <Links
              links={"https://www.instagram.com/lorenazanon.dix/?next=%2F"}
            >
              Instagram
            </Links>
            <Links
              links={
                "https://www.figma.com/design/ePEmC8G8cGb1xnF7p84xAY/Primeiro-App?node-id=0-1&p=f&t=mbr5fodB3azEoQN6-0"
              }
            >
              Figma
            </Links>
            <Links links={"https://br.pinterest.com/loreninhazanon/"}>
              Pinterest
            </Links>
          </ul>
        </div> */}
        <div id="projetos">
          <Cards Print={projet1} Titulo={"Pizzaria"} Link="https://github.com/LorennaSenai2A/Pizzaria" />
          <Cards Print={projet2} Titulo={"CyberVisual"} Link="https://www.figma.com/design/Q8WUrpon8qcl7qd4xVdy5W/Untitled?node-id=0-1&t=Hbr9GgLkubG2fiRO-1" />
          <Cards Print={projet3} Titulo={"BankWise"} Link="https://www.figma.com/design/hk0XBCwqvkc5gpAnoF46yV/BankWise?node-id=0-1&t=7k5DfLx1UnRwHc0k-1" />
          {/* <Cards Print={"https://placehold.co/100x75"} Titulo={"Projeto 4"} Link="https://github.com/" /> */}
        </div>

        <div id="socialLinks">
          <SocialLinks link={"https://github.com/LorennaSenai2A"} icon={"logo-github"} />
          <SocialLinks
            link={"https://www.instagram.com/lorenazanon.dix/?next=%2F"}
            icon={"logo-instagram"}
          />
          <SocialLinks
            link={"https://api.whatsapp.com/send/?phone=5514998128418&text&type=phone_number&app_absent=0"}
            icon={"logo-whatsapp"}
          />
         {/*} <SocialLinks
            link={"https://br.pinterest.com/"}
            icon={"logo-pinterest"}
          /> */}
        </div>
        <Rodape>@ElLorennaXD</Rodape>
      </div>
    </div>
  );
};

export default App;
