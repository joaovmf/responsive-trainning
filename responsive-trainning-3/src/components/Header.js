import { HeaderWrap } from "./HeaderStyles";

export default function Header() {
  return (
    <HeaderWrap>
      <header>
        <div className="logo"> </div>
          <ul className="menu">
            <li><a href="/">Sobre</a></li>
            <li><a href="/">Produtos</a></li>
            <li><a href="/">Contato</a></li>
          </ul>
      </header>
    </HeaderWrap>
  );
}
