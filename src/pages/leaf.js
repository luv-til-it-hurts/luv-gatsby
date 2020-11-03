import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"

import { Stack, Box, Heading, Text, Grid, Button } from "@chakra-ui/core"

import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"

export default function Heart({ data, pageContext }) {


  
return (
  <Layout background={data.cat.ACFCategoryData.background.localFile.publicURL}
  color={data.cat.ACFCategoryData.color}>

<div className="heartgrid">
      {data.posts.nodes.map((post, index) => (


        <div key={post.id} className={`heartgrid${index + 1}`}>
          <Link style={{color: data.cat.ACFCategoryData.color}} to={normalizePath(post.uri)}>
          <div className="grid-item-title" style={{color: data.cat.ACFCategoryData.color}} > {post.title} </div>
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
  cat: wpCategory(slug: {eq: "heart"}) {
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
 posts: allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "heart"}}}}}) {
    nodes {
      uri
      title
    }
  }
}
`
