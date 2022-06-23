import Image from "next/image";
import { Container } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Avatar } from "../Avatar";
export function Header() {
  return (
    <Container>
      <div className="header-logo">
        <Image src="/logo.svg" priority layout="fill" alt="StyleBoot" />
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-list-item">
            <a href="">masculino</a>
          </li>
          <li className="menu-list-item">
            <a href="">feminino</a>
          </li>
          <li className="menu-list-item">
            <a href="" className="menu-list-item-profile">
              <Avatar />
              Dog
            </a>
          </li>
          <li className="menu-list-item">
            <a href="">
              <AiOutlineShoppingCart />
            </a>
          </li>

        </ul>
      </nav>
    </Container>
  );
}
