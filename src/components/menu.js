import React, { useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"

import { normalizePath } from "../utils/get-url-path"

export default () => {

  const [ open, setOpen ] = useState(false)
  
  // monitor the state of the toggle
  // add/remove click event handler to the document
  useEffect(() => {
    const clickHandler = ({ target }) => {
      const container = document.getElementById('menu-section');
      if (container.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("click", clickHandler);

    // these functions clean up the event listeners
    return () => document.removeEventListener("click", clickHandler);
  });

  // same but for keypresses
  // if the esc key is pressed close the toggles
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setOpen(false);
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  const { mainMenu, pageMenu } = useStaticQuery(graphql`
    {
     pageMenu: wpMenu(slug: { eq: "page-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
      mainMenu: wpMenu(slug: { eq: "main-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  return !!mainMenu && !!mainMenu.menuItems && !!mainMenu.menuItems.nodes ? (
<div id="menu-section">
<button 
    aria-expanded={open === true ? "true" : "false"}
    className={open === true ? "active" : ""}
    onClick={ () => setOpen(!open) }>
    Toggle
  </button>
    <div className="menu-container" style={open ? {display: 'block'}: {display: 'none'}}>
      <div className="menu">
      <nav className="page-menu">
      {pageMenu.menuItems.nodes.map((menuItem, i) => {
        if (menuItem.parentId) {
          return null
        }

        const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

        return (
          <Link
          key={i + menuItem.url}
          style={{ display: `block` }}
          to={normalizePath(path)}
          >
          
            {menuItem.label}
         
          </Link>
        )
      })}
      </nav>

      <nav className="main-menu">
      {mainMenu.menuItems.nodes.map((menuItem, i) => {
        if (menuItem.parentId) {
          return null
        }

        const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

        return (
          <Link
            key={i + menuItem.url}
            style={{ display: `block` }}
            to={normalizePath(path)}
          >
         
              {menuItem.label}
            
          </Link>
        )
      })}
      </nav>
    </div>
    </div>

</div>
  ) : null
}
