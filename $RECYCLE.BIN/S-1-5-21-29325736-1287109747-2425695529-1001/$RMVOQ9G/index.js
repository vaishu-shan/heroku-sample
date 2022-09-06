import React from "react";
import "./style.css";
import Slider from "./swiper";
import Banner from "../../../assets/img/light-icons/Banner.png"
export default function CoverflowCarousel() {
  const settings = {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 2,
    initialSlide: 1,
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 40, // Stretch space between slides (in px)
      depth: 300, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: true // Enables slides shadows
    }
  };
  const data = [...Array(3).keys()];

  return (
    <div className="App">
      <Slider settings={settings}>
        {data.map(item => (
          <img src={Banner} key={item} alt="swipe" />
        ))}
      </Slider>
    </div>
  );
}
