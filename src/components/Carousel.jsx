import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Component1 = () => <p>Component 1</p>;
const Component2 = () => <div>Component 2</div>;
const Component3 = () => <span>Component 3</span>;

export default function Carousel() {
  const slides = [
    <Component1 key="1" />,
    <Component2 key="2" />,
    <Component3 key="3" />,
    // Add more slides as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
  };

  return (
    <Slider className="w-11/12 bg-slate-400" {...settings}>
      {slides}
    </Slider>
  );
}
