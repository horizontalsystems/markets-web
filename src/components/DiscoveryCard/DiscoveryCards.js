import React, { useState } from 'react'
import Slider from 'react-slick'
import DiscoveryCard from '../DiscoveryCard/DiscoveryCard'
import { ArrowLeft, ArrowRight } from '../Icon'

import './DiscoveryCards.scss'

function DiscoveryCards({ categories }) {
  const [activeCatIndex, setActiveCat] = useState(-1)

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [{
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }]
  }

  return (
    <div className="bg-steel-10 rounded-3">
      <Slider {...settings} className="mt-3 m-4 p-3">
        {categories.map((item, index) =>
          <DiscoveryCard
            key={item.id}
            title={item.name}
            description={item.description}
            active={activeCatIndex === index}
            onClick={() => setActiveCat(index)}
          />
        )}
      </Slider>
    </div>
  )
}

const SamplePrevArrow = ({ onClick }) => (
  <div className="Slider-arrow Slider-arrow-start p-2 bg-jeremy h-100 d-flex align-items-center rounded-start-3" onClick={onClick}>
    <ArrowLeft />
  </div>
)

const SampleNextArrow = ({ onClick }) => (
  <div className="Slider-arrow Slider-arrow-end p-2 bg-jeremy h-100 d-flex align-items-center rounded-end-3" onClick={onClick}>
    <ArrowRight />
  </div>
)
export default DiscoveryCards
