import { Container } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Avatar } from "../../components/Avatar";
import Link from "next/link";
export function Header() {
  return (
    <Container>
      <Link href="/">
        <img className="l-header-logo" src="/logo.svg" alt="" />
      </Link>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-list-item -page">
            <Link href="/masculino">masculino</Link>
          </li>
          <li className="menu-list-item -page">
            <Link href="/feminino">feminino</Link>
          </li>
          <li className="menu-list-item">
            <div className="menu-list-item-profile">
              <Link href="/perfil">
                <Avatar />
              </Link>
              dog
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
