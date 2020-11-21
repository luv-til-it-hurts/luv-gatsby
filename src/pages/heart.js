import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"
import CatDesc from "../components/category-description-toggle"

export default function Heart({ data, pageContext }) {
  console.log("Heart -> data", data)

  return (
    <Layout
      background={data.cat.ACFCategoryData.background.localFile.publicURL}
      backColor={data.cat.ACFCategoryData.color}
      frontColor="#E91E63"
      logoToggle={true}
    >
      <div className="heartgrid">
        {data.posts.nodes.map((post, index) => (
      
            <Link
              to={normalizePath(post.uri)}
              key={index}
              className={`heartgrid${index + 1}`}
            >
              <div
                className="grid-item-title"
                style={{ color: data.cat.ACFCategoryData.color }}
              >
                {" "}
                <div className="item-title">{post.title}</div>{" "}
              </div>
            </Link>
        ))}
      </div>

      <CatDesc
        slug={data.cat.slug}
        color={data.cat.ACFCategoryData.colorHigh}
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
    cat: wpCategory(slug: { eq: "heart" }) {
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
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "heart" } } } }
      }
    ) {
      nodes {
        uri
        title
      }
    }
  }
`
