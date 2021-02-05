import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import { Link } from "gatsby"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  console.log(blogs)
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blogs" />
        <Link to="/" className="btn center-btn" style={{ marginTop: "-2rem" }}>
          Home
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
