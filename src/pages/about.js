import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout"
import styled from "styled-components"
import { Summary } from "../components/summary"
import { Info } from "../components/info"
import { Experience } from "../components/experience"
import { Skill } from "../components/skill"

export default ({ location }) => {
  return (
    <Layout location={location} title={location.pathname.split("/")[1]}>
      <Wrapper>
        <Info />
        <Summary />
        <Experience />
        <Skill />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
