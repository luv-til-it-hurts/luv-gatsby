import React from "react"

import { Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../layout"
import { normalizePath } from "../../utils/get-url-path"

function Post({ data, location }) {

  const { nextPage, previousPage, page } = data
  const { link, title, author, content, featuredImage, categories, tags } = page
  console.log("🚀 ~ file: post.js ~ line 13 ~ Post ~ categories", categories)

  return (
    <Layout 
    background="none"
    backColor={categories.nodes[0].ACFCategoryData.color}
    frontColor="#D0F63C"
    logoToggle={false}
    >
      <article
        className="post"
        style={{ backgroundColor: categories.nodes[0].ACFCategoryData.color }}
      >
        <div className="post-previous">
          <Link to={`../${categories.nodes[0].slug}`}>
            <img
              src={
                categories.nodes[0].ACFCategoryData.pageicon.localFile.publicURL
              }
            />
          </Link>

          <div className="social-icons">
            <a href={`http://www.facebook.com/share.php?u=${location.href}`}>
              <svg width={32} height={32} fill="none">
                <path
                  d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm2.667 30.4v-9.733H22c.267 0 .533-.2.667-.467L24 15.533c.067-.2 0-.4-.133-.6-.134-.2-.334-.266-.534-.266h-4.666v-4h4c.4 0 .666-.267.666-.667V5.333c0-.4-.266-.666-.666-.666h-8C13.6 4.667 12 5.4 12 7.333v7.334H8.667c-.4 0-.667.266-.667.666V20c0 .4.267.667.667.667H12V28c0 .4.267.667.667.667s.666-.267.666-.667v-8c0-.4-.266-.667-.666-.667H9.333V16h3.334c.4 0 .666-.267.666-.667v-8c0-1.2 1-1.333 1.334-1.333H22v3.333h-4c-.4 0-.667.267-.667.667v5.333c0 .4.267.667.667.667h4.467l-.934 3.333H18c-.4 0-.667.267-.667.667v10.6c-.466.067-.866.067-1.333.067-8.067 0-14.667-6.6-14.667-14.667S7.933 1.333 16 1.333 30.667 7.933 30.667 16c0 7.2-5.2 13.133-12 14.4z"
                  fill={categories.nodes[0].ACFCategoryData.colorHigh}
                />
              </svg>
            </a>

            <a href="https://www.instagram.com/luvtilithurts">
              <svg width={32} height={32} fill="none">
                <path
                  d="M26 0H5.867C2.6 0 0 2.667 0 6v4c0 .4.267.667.667.667h6.666c.4 0 .667-.267.667-.667s-.267-.667-.667-.667h-6V6c0-2.6 2-4.667 4.534-4.667H26c2.6 0 4.667 2.067 4.667 4.667v3.333h-6c-.4 0-.667.267-.667.667s.267.667.667.667h6.666c.4 0 .667-.267.667-.667V6c0-3.333-2.667-6-6-6zM31.333 12c-.4 0-.666.267-.666.667V26c0 2.6-2.067 4.667-4.667 4.667H6A4.638 4.638 0 011.333 26V12.667c0-.4-.266-.667-.666-.667S0 12.267 0 12.667V26c0 3.333 2.667 6 6 6h20c3.333 0 6-2.667 6-6V12.667c0-.4-.267-.667-.667-.667z"
                  fill={categories.nodes[0].ACFCategoryData.colorHigh}
                />
                <path
                  d="M8 17.334c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zm14.667 0C22.667 21 19.667 24 16 24s-6.667-3-6.667-6.666c0-3.667 3-6.667 6.667-6.667s6.667 3 6.667 6.667z"
                  fill={categories.nodes[0].ACFCategoryData.colorHigh}
                />
                <path
                  d="M10.667 17.333c0 2.934 2.4 5.334 5.333 5.334 2.933 0 5.333-2.4 5.333-5.334C21.333 14.4 18.933 12 16 12c-2.933 0-5.333 2.4-5.333 5.333zm9.333 0c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zM23.333 7.333c1.134 0 2-.866 2-2 0-1.133-.866-2-2-2-1.133 0-2 .867-2 2 0 1.134.867 2 2 2zm0-2.666c.4 0 .667.267.667.667S23.733 6 23.333 6s-.666-.266-.666-.667c0-.4.266-.666.666-.666z"
                  fill={categories.nodes[0].ACFCategoryData.colorHigh}
                />
              </svg>
            </a>
          </div>

          {!!previousPage && (
            <Link to={normalizePath(previousPage.uri)}>
              <svg width={57} height={24} fill="none">
                <path
                  d="M.94 10.94a1.5 1.5 0 000 2.12l9.545 9.547a1.5 1.5 0 102.122-2.122L4.12 12l8.486-8.485a1.5 1.5 0 10-2.122-2.122L.94 10.94zM57 10.5H2v3h55v-3z"
                  fill={categories.nodes[0].ACFCategoryData.colorHigh}
                />
              </svg>
            </Link>
          )}
        </div>
        <div className="post-body">
          <h1>{title}</h1>
          <h2>by {author.node.name}</h2>
          {/* {!!featuredImage?.node?.remoteFile?.childImageSharp && (
            <Img fluid={featuredImage.node.remoteFile.childImageSharp.fluid} />
          )} */}
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div
          className="post-next"

        >
          <div className="post-tag-container">
            {" "}
            {tags.nodes.map((tag, index) => (
              <Link key={index} to={normalizePath(tag.slug)}>
                <img src={tag.ACFTagData.tagimage.localFile.publicURL} />
              </Link>
            ))}
          </div>

          {!!nextPage && (
            <Link to={normalizePath(nextPage.uri)}>
              <svg width={57} height={24} fill="none">
                <path
                  d="M56.06 13.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L52.88 12l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM0 13.5h55v-3H0v3z"
                  fill={categories.nodes[0].ACFCategoryData.colorHigh}
                />
              </svg>
            </Link>
          )}
        </div>
      </article>
    </Layout>
  )
}

export default Post
