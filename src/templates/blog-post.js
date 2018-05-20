import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  const post = data.markdownRemark
  return(
      <div>
          <Link to="/blog">Go Back</Link>
          <hr />
          <h1>{post.frontmatter.title}</h1>
          <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
          <div dangerouslySetHTML={{__html: post.html}} />
      </div>
  )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`
