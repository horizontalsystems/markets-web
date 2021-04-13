import React from 'react'
import Slider from 'react-slick'
import coinsStore from '../../core/coins-store'

import { ArrowLeft, ArrowRight } from '../Icon'
import DiscoveryCard from '../DiscoveryCard/DiscoveryCard'

import './DiscoveryCards.scss'

function DiscoveryCards({ current }) {

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    infinite: true,
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
        {coinsStore.categories.map(({ id, name, description }) =>
          <DiscoveryCard id={id} key={id} title={name} description={description} active={current === id} />
        )}
      </Slider>
    </div>
  )
}

const SamplePrevArrow = ({ onClick }) => (
  <div className="Slider-arrow Slider-arrow-start p-2 bg-jeremy h-100 rounded-start-3" onClick={onClick}>
    <ArrowLeft />
  </div>
)

const SampleNextArrow = ({ onClick }) => (
  <div className="Slider-arrow Slider-arrow-end p-2 bg-jeremy h-100 rounded-end-3" onClick={onClick}>
    <ArrowRight />
  </div>
)

export default DiscoveryCards
