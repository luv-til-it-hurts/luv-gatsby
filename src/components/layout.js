import React from "react"
import Header from "./header"

import "../assets/style.css"

const Layout = ({ children, background, backColor, frontColor }) => {

  document.body.style.backgroundColor = backColor

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      }}>
        <Header frontColor={frontColor} />
        <div>{children}</div>
    </div>
  )
}

export default Layout