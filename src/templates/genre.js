import { graphql, navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import DivContainer from "../components/DivContainer"
import Layout from "../components/Layout"
import HeaderContainer from "../containers/HeaderContainer"
import PostListContainer from "../containers/PostListContainer"
import FilterListContainter from "../containers/FilterListContainer"
import SubFilterContainter from "../containers/SubFilterContainter"
import { genres } from "../const/genres"
import styled from "@emotion/styled"
import Seo from "../components/Seo"
const Genre = ({ data, location }) => {
  const { nodes: postList } = data.allMarkdownRemark
  const genre = location.pathname.replace(/\//g, "")
  const prams = new URLSearchParams(location.search)
  let [filteredPost, setFilteredPostList] = useState(postList)
  const [filter, setFilter] = useState(prams.get("cate"))
  const [subFilterList, setSubFilterList] = useState([])
  const [subFilter, setSubFilter] = useState(
    prams.get(filter) ? prams.get(filter) : ""
  )
  useEffect(() => {
    if (!filter) {
      navigate(`/${genre}?cate=all`)
      setFilter("all")
    }
  }, [filter])

  useEffect(() => {
    let temp = new Set()
    postList.forEach(({ frontmatter }) => {
      if ("string" !== typeof frontmatter[filter]) {
        frontmatter[filter]?.forEach(data => {
          temp.add(data)
        })
      } else {
        temp.add(frontmatter[filter])
      }
    })
    setSubFilterList([...temp])
  }, [filter, postList])

  useEffect(() => {
    if (subFilter !== "") {
      setFilteredPostList(
        postList.filter(
          ({ frontmatter }) =>
            frontmatter[filter] === subFilter ||
            frontmatter[filter]?.includes(subFilter)
        )
      )
    }
  }, [filter, subFilter, postList])

  return (
    <>
      <HeaderContainer />
      <Layout location={location}>
        <Seo title={genre} description={""} />
        <DivContainer>
          <FilterListContainter
            genre={genre}
            filter={filter}
            setFilter={setFilter}
            setSubFilter={setSubFilter}
          />
          {subFilterList.length > 0 && (
            <SubFilterContainter
              genre={genre}
              filter={filter}
              subFilter={subFilter}
              subFilterList={subFilterList}
              setSubFilter={setSubFilter}
            />
          )}
          <CountMsg>
            총{" "}
            <strong>
              {subFilter !== "" ? filteredPost.length : postList.length}
            </strong>
            개의 {genres[genre]}
          </CountMsg>
          <PostListContainer
            isSlide={false}
            postList={subFilter !== "" ? filteredPost : postList}
          />
        </DivContainer>
      </Layout>
    </>
  )
}
export default Genre

const CountMsg = styled.div`
  margin-top: 10px;
  font-size: 1.8vw;
`
export const pageQuery = graphql`
  query filteredPost($genre: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___release], order: DESC }
      filter: { frontmatter: { genre: { eq: $genre } } }
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
          poster
          release
          ott
          countries
          cover
          end
          categories
        }
      }
      totalCount
      group(field: frontmatter___ott) {
        fieldValue
      }
    }
  }
`
