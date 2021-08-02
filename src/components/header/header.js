import React from "react";
import {HeaderWrap} from './headerStyles'
import {Logo} from './Logo/Logo'
import {Menu} from './Menu/Menu'

function Header() {
  return (
  <HeaderWrap>
      <Logo/> 
      <Menu/>
  </HeaderWrap>
  )
}

export default Header;
