import Link from "next/link";
import { Container } from "./styles";

export function Footer(){
  return(
    <Container>
      <div className="l-footer-box">
        <img className="l-footer-logo" src="/logo-white.svg" alt="" />
        <div className="wrapper-list">
          <h2 className="l-footer-topic" >Contato</h2>
          <ul className="l-footer-list">
            <li className="l-footer-list-item">(38) 9999-9999</li>
            <li className="l-footer-list-item">contato@styleboot.com</li>
            <li className="l-footer-list-item">Icones</li>
          </ul>
        </div>
        <div className="wrapper-list">
          <h2 className="l-footer-topic">Informações</h2>
          <ul className="l-footer-list">
            <li className="l-footer-list-item"><Link href="/masculino">Masculino</Link></li>
            <li className="l-footer-list-item"><Link href="/feminino">Feminino</Link></li>
            <li className="l-footer-list-item">Termos e Condições</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}