import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaGithubSquare,
  FaMedium,
  FaInstagramSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/philip.smalls",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/philip-smalls/",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/thenatural86",
  },
  {
    id: 4,
    icon: <FaYoutubeSquare className="social-icon"></FaYoutubeSquare>,
    url: "https://www.youtube.com/channel/UC16Y3fs7PjLaOdsSGhuW-5g",
  },
  {
    id: 5,
    icon: <FaMedium className="social-icon"></FaMedium>,
    url: "https://medium.com/@philip.smalls86",
  },
  {
    id: 5,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/ninjajesse/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a target="_blank" href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
