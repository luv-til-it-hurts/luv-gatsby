import React from "react"

import { Link } from "gatsby"
import LuvLogo from "./logo"
import Menu from "./menu"

export default ({frontColor, menuToggle, logoToggle}) => (
  <header>
    {logoToggle ? <Link to="/"> 
      <LuvLogo frontcolor={frontColor} />
    </Link> : null }

   {menuToggle ?  <Menu /> : null}
  </header>
)
