import Image from "next/image";
import { Container } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Avatar } from "../Avatar";
import Link from "next/link";
export function Header() {
  return (
    <Container>
      <Link href="/">
        <div className="header-logo">
        <Image src="/logo.svg" priority layout="fill" alt="StyleBoot" />

        </div>
      </Link>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-list-item">
            <Link href="/masculino">masculino</Link>
          </li>
          <li className="menu-list-item">
            <Link href="/feminino">feminino</Link>
          </li>
          <li className="menu-list-item">
            <div className="menu-list-item-profile">
              <Link href="/perfil" >
                <Avatar />
              </Link>
                Dog
            </div>
          </li>
          <li className="menu-list-item">
              <AiOutlineShoppingCart />
          </li>

        </ul>
      </nav>
    </Container>
  );
}
