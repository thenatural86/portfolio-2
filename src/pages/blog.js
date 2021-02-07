import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  // console.log(blogs)
  return (
    <Layout>
      <SEO title="Blogs" />
      <section className="blog-page section">
        <Blogs blogs={blogs} title="blogs" />
        <Link to="/" className="btn center-btn">
          Home
        </Link>
        <div> </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        url
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
