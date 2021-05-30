import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative">
      <div className=" absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma"></img>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Luggage/May/BBS/Scrolls/Mens/GW_PC_BUNK_BBD_mens_1500x600._CB668335263_.jpg"
          ></img>
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff"></img>
        </div>

        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
          ></img>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
