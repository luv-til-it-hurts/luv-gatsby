import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"



import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"

export default function Home({ data, pageContext }) {
console.log("Home -> data", data)

  
return (
  <Layout frontColor="#e30613">
    
     <div className="homegrid">
      {data.cats.nodes.map((cat, index) => (


        <div key={cat.id} className={`homegrid${cat.ACFCategoryData.homeOrder}`}>
          <Link to={normalizePath(cat.slug)}>
          {!!cat?.ACFCategoryData?.homeicon?.localFile && (
                    <img
                      className="homegrid-icon"
                     src={
                        cat.ACFCategoryData.homeicon.localFile.publicURL
                      }
                    />
                  )}
          </Link>
        </div>
      ))}
    </div>

  </Layout>
)}

export const query = graphql`
fragment Thumbnail on File {
  childImageSharp {
    fluid(maxWidth: 500) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
query {
  cats: allWpCategory {
    nodes {
      id
      name
      slug
      ACFCategoryData {
        homeOrder
        homeHover
        homeicon {
          localFile {
            publicURL
          }
        }
      }
    }
  }
}
`
