import React from "react"

import { Link } from "gatsby"
import LuvLogo from "./logo"
import Menu from "./menu"

export default ({frontColor, menuToggle}) => (
  <header>
    <Link to="/"> 
      <LuvLogo frontColor={frontColor} />
    </Link>

   {menuToggle ?  <Menu /> : null}
  </header>
)
