import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../utils/get-url-path"

export default () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const clickHandler = ({ target }) => {
      const container = document.getElementById("menu-section")
      if (container.contains(target)) return
      setOpen(false)
    }

    document.addEventListener("click", clickHandler)

    return () => document.removeEventListener("click", clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return
      setOpen(false)
    }
    document.addEventListener("keydown", keyHandler)

    return () => document.removeEventListener("keydown", keyHandler)
  })

  const { mainMenu, pageMenu } = useStaticQuery(graphql`
    {
      pageMenu: wpMenu(slug: { eq: "page-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
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
            connectedNode {
              node {
                ... on WpCategory {
                  slug
                  ACFCategoryData {
                menuicon {
                  localFile {
                    publicURL
                  }
                }
              }
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
      <div
        aria-expanded={open === true ? "true" : "false"}
        className={open === true ? "menu-open" : "menu-closed"}
        onClick={() => setOpen(!open)}
      ></div>
      <div
        className="menu-container"
        style={open ? { display: "block" } : { display: "none" }}
      >
        <div className="menu">
          <nav className="page-menu">
            {pageMenu.menuItems.nodes.map((menuItem, i) => {
              if (menuItem.parentId) {
                return null
              }

              const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

              if (path === "https://luvhurts.co/") {
                return (
                  <li key={i}>
                    <a
                      
                      href={path}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {menuItem.label}
                    </a>
                  </li>
                )
              } else if (menuItem.label === "Luv ‘til it Hurts is a Work Group. Its outputs are collectively authored.") {
                return (
                  <li key={i}>
                    <Link to={normalizePath(path)}>
                      About
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li key={i}>
                    <Link to={normalizePath(path)}>
                      {menuItem.label}
                    </Link>
                  </li>
                )
              }
            })}
          </nav>

          <nav className="main-menu">
            {mainMenu.menuItems.nodes.map((menuItem, i) => {
              if (menuItem.parentId) {
                return null
              }

              const path = menuItem.connectedNode.node.slug

              return (
                <Link
                  key={i + path}
                  style={{ display: `block` }}
                  to={normalizePath(path)}
                >
                  {menuItem.label}
                  <img style={{ display: `block`}} src={menuItem.connectedNode.node.ACFCategoryData.menuicon.localFile.publicURL} alt={menuItem.label} />
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  ) : null
}
