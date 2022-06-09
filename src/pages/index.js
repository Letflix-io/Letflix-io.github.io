import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeaderContainer from "../containers/HeaderContainer"
import PostListContainer from "../containers/PostListContainer"
import DivContainer from "../components/DivContainer"
import MainMsg from "../components/MainMsg/MainMsg"
import SlidePostContainer from "../containers/SlidePostContainer"
const Home = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const totalCount = data.allMarkdownRemark.totalCount

  function sinceAndGenreFilter(since, genre) {
    return posts?.filter(post => {
      return (
        Number(post.frontmatter.release.split(".")[0]) >= Number(since) &&
        post.frontmatter.genre === genre
      )
    })
  }
  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <HeaderContainer />
        <Seo title="Lesfilx" description={""} />
      </Layout>
    )
  }
  return (
    <Layout location={location}>
      <HeaderContainer />
      <Seo title="Lesfilx" description={""} />
      <DivContainer>
        <MainMsg>
          <div>
            총 <strong className="count">{totalCount}</strong> 개의 컨텐츠가
            있어요
          </div>
        </MainMsg>
        <SlidePostContainer
          postList={sinceAndGenreFilter("2021", "drama")}
          title={"최신 드라마"}
        />
        <SlidePostContainer
          postList={sinceAndGenreFilter("2021", "movie")}
          title={"최신 영화"}
        />
      </DivContainer>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { title: { regex: "/^((?!시즌).)*$/" } } }
      sort: { fields: [frontmatter___release], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          originalTitle
          description
          genre
          imgname
          release
          ott
          countries
          categories
        }
      }
      totalCount
    }
  }
`
