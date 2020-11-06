import React from "react"

import { Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../layout"
import { normalizePath } from "../../utils/get-url-path"


function Post({ data }) {
  console.log("Post -> data", data)
  const { nextPage, previousPage, page } = data
  const { title, author, content, featuredImage, categories } = page

  return (
    <Layout logoToggle={false}>
      <article className="post" style={{backgroundColor: categories.nodes[0].ACFCategoryData.color }}>
        <div className="post-previous">
        {!!previousPage && (
        <Link to={normalizePath(previousPage.uri)}>
              <svg width={57} height={24} fill="none" >
      <path
        d="M.94 10.94a1.5 1.5 0 000 2.12l9.545 9.547a1.5 1.5 0 102.122-2.122L4.12 12l8.486-8.485a1.5 1.5 0 10-2.122-2.122L.94 10.94zM57 10.5H2v3h55v-3z"
        fill="#000"
      />
    </svg>
        </Link>
      )}
        </div>
     <div className="post-body">
        <h1>{title}</h1>
        <h2>by {author.node.name}</h2>
          {!!featuredImage?.node?.remoteFile?.childImageSharp && (

              <Img fluid={featuredImage.node.remoteFile.childImageSharp.fluid} />
           
          )}
          <p dangerouslySetInnerHTML={{ __html: content }} />

     </div>
     <div className="post-next">
     {!!nextPage && (
        <Link to={normalizePath(nextPage.uri)}>
              <svg width={57} height={24} fill="none" >
      <path
        d="M56.06 13.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L52.88 12l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM0 13.5h55v-3H0v3z"
        fill="#ECE3C9"
      />
    </svg></Link>
      )}
     </div>
      </article>

    </Layout>
  )
}

export default Post
