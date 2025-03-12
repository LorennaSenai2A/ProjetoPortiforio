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

const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <div id="container">
        <Perfil fotoPerfil={isLight ? fotoLight : fotoDark}>
          Prazer! Meu nome é Lorenna, tenho 16 anos e sou estudante de
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
          <Cards Print={"https://placehold.co/100x75"} Titulo={"Projeto 1"} Link="https://github.com/" />
          <Cards Print={"https://placehold.co/100x75"} Titulo={"Projeto 1"} Link="https://github.com/" />
          <Cards Print={"https://placehold.co/100x75"} Titulo={"Projeto 1"} Link="https://github.com/" />
          <Cards Print={"https://placehold.co/100x75"} Titulo={"Projeto 1"} Link="https://github.com/" />
        </div>

        <div id="socialLinks">
          <SocialLinks link={"https://github.com/"} icon={"logo-github"} />
          <SocialLinks
            link={"https://www.instagram.com/"}
            icon={"logo-instagram"}
          />
          <SocialLinks
            link={"https://www.figma.com/login"}
            icon={"logo-figma"}
          />
          <SocialLinks
            link={"https://br.pinterest.com/"}
            icon={"logo-pinterest"}
          />
        </div>
        <Rodape>@ElLorennaXD</Rodape>
      </div>
    </div>
  );
};

export default App;
