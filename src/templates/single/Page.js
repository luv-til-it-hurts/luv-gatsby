import React from "react"
import { graphql } from "gatsby"
import Page from "../../components/template-parts/page"

export default ({ data }) => <Page data={data} />

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          localFile {
            ...HeroImage
          }
        }
      }
    }

    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
