import React from "react"
import { graphql } from "gatsby"
import Post from "../../components/template-parts/post"

export default ({ data }) => <Post data={data} />

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      title
      content
      author {
      node {
        name
      }
    }
      featuredImage {
        node {
          localFile {
            ...HeroImage
          }
        }
      }
      categories {
      nodes {
        slug
        ACFCategoryData {
          color
          colorHigh
          pageicon {
            localFile {
              publicURL
            }
          }
        }
      }
    }
    tags {
      nodes {
         slug
        ACFTagData {
          tagimage {
            localFile {
              publicURL
            }
          }
        }
       
      }
    }
    }

    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
