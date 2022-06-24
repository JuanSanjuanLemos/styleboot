import Image from "next/image";
import { Button } from "../../components/Button";
import { ShadowImage } from "../../components/ShadowImage";
import { Container } from "./style";

export function Intro() {
  return (
    <Container>
      <div className="l-intro">
        <h1 className="l-intro-title">
          ANDE COM <span className="l-intro-title-span">ESTILO</span>
        </h1>
        <p className="l-intro-text">
          Os melhores calçados para a sua melhor versão, você encontra aqui.
          Encontre seu estilo e o deixe registrado por onde andar.
        </p>
        <Button text="ENCONTRE O SEU ESTILO" />
      </div>
      <div className="l-image-home">
        <div className="wrapper">
          <Image src="/tenis-home.png" alt="Tênis" layout="fill" priority />
        </div>
        <ShadowImage />
      </div>
      <img className="sep" src="/sep.svg"/>
    </Container>
  );
}
