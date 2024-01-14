import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Link = ({ className, href, children }) => (
  <AniLink cover to={href} className={className} bg="#2a5da6">
    {children}
  </AniLink>
)

export default Link
