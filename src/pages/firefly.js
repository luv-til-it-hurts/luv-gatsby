import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"


import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"

export default function Firefly({ data, pageContext }) {



  
return (
  <Layout background={data.cat.ACFCategoryData.background.localFile.publicURL}
  backColor={data.cat.ACFCategoryData.color}
  frontColor="#D0F63C" logoToggle={true}>

<div className="fireflygrid">
      {data.posts.nodes.map((post, index) => (


        <div key={index} className={`fireflygrid${index + 1}`}>
          <Link to={normalizePath(post.uri)}>
         <div className="firefly-item-title" style={{color: data.cat.ACFCategoryData.color}} > <div className="item-title">{post.title}</div> </div>
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
  cat: wpCategory(slug: {eq: "firefly"}) {
    id
    ACFCategoryData {
      color
      pageicon {
        localFile {
          publicURL
        }
      }
      background {
        localFile {
          publicURL
        }
      }
    }
  }
 posts: allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "firefly"}}}}}) {
    nodes {
      uri
      title
    }
  }
}
`
