import styled from "@emotion/styled"
import React from "react"
import Slider from "react-slick"
import PostCard from "../components/PostCard/PostCard"
function SlidePostContainer({ postList }) {
  const length = postList.length
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: length > 4 ? 4 : length,
    slidesToScroll: length > 4 ? 4 : length,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: length > 5 ? 5 : length,
          slidesToScroll: length > 5 ? 5 : length,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: length > 3 ? 3 : length,
          slidesToScroll: length > 3 ? 3 : length,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: length > 2 ? 2 : length,
          slidesToScroll: length > 2 ? 2 : length,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {postList.map((post, i) => (
        <PostCard post={post} />
      ))}
    </Slider>
  )
}

export default SlidePostContainer
