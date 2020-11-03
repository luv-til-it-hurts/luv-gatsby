import React from "react"
import { Heading, Box, Grid } from "@chakra-ui/core"
import { Link } from "gatsby"
import LuvLogo from "./logo"
import Menu from "./menu"

export default ({frontColor}) => (
  <header>
    <Link to="/"> 
      <LuvLogo frontColor={frontColor} />
    </Link>

    <Menu />
  </header>
)
