import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import PostListContainer from "../containers/PostListContainer"
import HeaderContainer from "../containers/HeaderContainer"
import DivContainer from "../components/DivContainer"
import styled from "@emotion/styled"
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___release], order: DESC }) {
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
          poster
          release
          ott
          countries
          cover
          end
          categories
        }
      }
    }
  }
`
function Search({ data, location }) {
  const searchWord = decodeURI(location.search?.replace("?q=", ""))

  const postList = data.allMarkdownRemark.nodes || []
  const filteredPosts = postList.filter(post => {
    const { title, description, genre, countries, ott, categories } =
      post.frontmatter
    return (
      (description &&
        description.toLowerCase().includes(searchWord?.toLowerCase())) ||
      (title && title.toLowerCase().includes(searchWord?.toLowerCase())) ||
      (genre && genre.toLowerCase().includes(searchWord?.toLowerCase())) ||
      (countries &&
        countries.toLowerCase().includes(searchWord?.toLowerCase())) ||
      (ott && ott.join("").toLowerCase().includes(searchWord?.toLowerCase())) ||
      (categories &&
        categories.join("").toLowerCase().includes(searchWord?.toLowerCase()))
    )
  })

  return (
    <div>
      <HeaderContainer />
      <Layout location={location}>
        <Seo title={`${searchWord} 검색 결과`} />
        <DivContainer>
          <Msg>
            {searchWord ? `${searchWord} 검색 결과` : "검색어를 입력해주세요"}
          </Msg>
          <PostListContainer postList={filteredPosts} isSlide={false} />
        </DivContainer>
      </Layout>
    </div>
  )
}

const Msg = styled.strong`
  font-size: 2.8vw;
`

export default Search