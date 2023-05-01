import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/banner.png"
import AmberAle from "../assets/updatedBeerImgs/AmericanAmberAle.png";
import AmberLager from "../assets/updatedBeerImgs/AmericanAmberLager.png";
import AmericanBarleyWine from "../assets/updatedBeerImgs/AmericanBarleyWine.png";
import AmericanBlackAle from "../assets/updatedBeerImgs/AmericanBlackAle.png";
import AmericanBrett from "../assets/updatedBeerImgs/AmericanBrett.png";
import AmericanBrownAle from "../assets/updatedBeerImgs/AmericanBrownAle.png";
import AmericanCreamAle from "../assets/updatedBeerImgs/AmericanCreamAle.png";
import AmericanImperialPorter from "../assets/updatedBeerImgs/AmericanImperialPorter.png";
import AmericanImperialRedAle from "../assets/updatedBeerImgs/AmericanImperialRedAle.png";
import AmericanImperialStout from "../assets/updatedBeerImgs/AmericanImperialStout.png";
import IndiaPaleAle from "../assets/updatedBeerImgs/AmericanIndiaIPA.png";
import AmericanPaleAle from "../assets/updatedBeerImgs/AmericanPaleAle.png";
import AmericanSour from "../assets/updatedBeerImgs/AmericanSour.png";
import AmericanStout from "../assets/updatedBeerImgs/AmericanStout.png";
import AmericanStyleWheatWineAle from "../assets/updatedBeerImgs/AmericanWheat.png";
import AmericanWheat from "../assets/updatedBeerImgs/AmericanWheatWine.png";

import { Link } from 'react-router-dom';
import React from "react";
import { useState, useEffect } from "react";

export const Beermenu = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <section className="beermenu" id="beermenus">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="beermenu-bx wow zoomIn">
                          <h2> Beer Menu</h2>
                        <p>Find your favorite beer.<br></br> Find your favorite food that goes with your beer.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme beermenu-slider">
                            <div className="item">
                                <img src={AmberAle} alt="Image" />
                                <h5>American Amber Ale</h5>
                            </div>
                            <div className="item">
                                <img src={AmberLager} alt="Image" />
                                <h5>American Amber Lager</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanBarleyWine} alt="Image" />
                                <h5>American Barley Wine</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanBlackAle} alt="Image" />
                                <h5>American Black Ale</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanBrett} alt="Image" />
                                <h5>American Brett</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanBrownAle} alt="Image" />
                                <h5>American Brown Ale</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanCreamAle} alt="Image" />
                                <h5>American Cream Ale</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanImperialPorter} alt="Image" />
                                <h5>American Imperial Porter</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanImperialRedAle} alt="Image" />
                                <h5>American Imperial Red Ale</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanImperialStout} alt="Image" />
                                <h5>American Imperial Stout</h5>
                            </div>
                            <div className="item">
                                <img src={IndiaPaleAle} alt="Image" />
                                <h5>American India Pale Ale</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanPaleAle} alt="Image" />
                                <h5>American Pale Ale</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanSour} alt="Image" />
                                <h5>American Sour</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanStout} alt="Image" />
                                <h5>American Stout</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanStyleWheatWineAle} alt="Image" />
                                <h5>American Style Wheat Wine Ale</h5>
                            </div>
                            <div className="item">
                                <img src={AmericanWheat} alt="Image" />
                                <h5>American Wheat</h5>
                            </div>


                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
