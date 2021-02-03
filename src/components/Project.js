import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({
  github,
  description,
  id,
  image,
  title,
  stack,
  url,
  index,
}) => {
  // console.log(github)
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
    </article>
  )
}

Project.propTypes = {}

export default Project
