import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"
import CatDesc from "../components/category-description-toggle"

export default function Heart({ data, pageContext }) {
  return (
    <Layout
      background={data.cat.ACFCategoryData.background.localFile.publicURL}
      backColor={data.cat.ACFCategoryData.color}
      frontColor="#353132"
      logoToggle={true}
    >
      <div className="leafgrid">
        {data.posts.nodes.map((post, index) => (
     
            <Link
              style={{ color: data.cat.ACFCategoryData.color }}
              to={normalizePath(post.uri)} key={post.id} className={`leafgrid${index + 1}`}
            >
              <div
                className="grid-item-title"
                style={{ color: data.cat.ACFCategoryData.color }}
              >
                <div className="item-title">{post.title}</div>
              </div>
            </Link>
   
        ))}
      </div>

      <CatDesc
        slug={data.cat.slug}
        color={data.cat.ACFCategoryData.colorHigh}
        backgroundColor={data.cat.ACFCategoryData.color}
        image={data.cat.ACFCategoryData.pageicon.localFile.publicURL}
        description={data.cat.description}
      />
    </Layout>
  )
}

export const query = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  query {
    cat: wpCategory(slug: { eq: "leaf" }) {
      id
      slug
      description
      ACFCategoryData {
        color
        colorHigh
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
    posts: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "leaf" } } } } }
    ) {
      nodes {
        uri
        title
      }
    }
  }
`
