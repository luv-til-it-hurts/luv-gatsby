import React from "react"
import Header from "./header"

import "../assets/style.css"

const Layout = ({ children, background, backColor, frontColor, menuToggle, logoToggle }) => {


  const isBrowser = typeof document !== `undefined`

              if (isBrowser) {
  document.body.style.backgroundColor = backColor
  document.body.style.backgroundImage = `url(${background})`
  document.body.style.backgroundPosition = 'center'
  document.body.style.backgroundRepeat = 'no-repeat'
}

  return (
    <div>
        <div style={logoToggle ? {display: 'block'} : {display: 'none'}}> <Header logoToggle={logoToggle} menuToggle={menuToggle} frontColor={frontColor} />
        </div>
        <div>{children}</div>
    </div>
  )
}

export default Layout