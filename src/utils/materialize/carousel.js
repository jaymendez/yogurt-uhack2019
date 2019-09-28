import React, { Component } from "react";
import ReactDOM from "react-dom";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false}>
        <div>
          <img
            src="https://lorempixel.com/640/480/?62408"
            style={{ objectFit: "cover", width: "50%", height: "50%" }}
          />
          <p className="legend">Commercial</p>
        </div>
        <div>
          <img
            src="https://lorempixel.com/640/480/?62408"
            style={{ objectFit: "cover", width: "50%", height: "50%" }}
          />
          <p className="legend">Land</p>
        </div>
        <div>
          <img
            src="https://lorempixel.com/640/480/?62408"
            style={{ objectFit: "cover", width: "50%", height: "50%" }}
          />
          <p className="legend">House</p>
        </div>
        <div>
          <img
            src="https://lorempixel.com/640/480/?62408"
            style={{ objectFit: "cover", width: "50%", height: "50%" }}
          />
          <p className="legend">Condo</p>
        </div>
      </Carousel>
    );
  }
}
export default DemoCarousel;

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
