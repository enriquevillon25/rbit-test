import React, { useRef } from "react";
import Carousel from "react-slick";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "lib/useTranslation";
import { testimonials } from "data/siteContent";
import Title from "../Title";
import TestiCard from "../Cards/Testimonial";
import useStyle from "./testi-style";

function Testimonials() {
  const { t } = useTranslation("common");

  const slider = useRef(null);
  const { classes, cx } = useStyle() as any;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 2,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.root}>
      <Title
        head={t("education-landing.testimonials_title")}
        desc={t("education-landing.testimonials_desc")}
        align="center"
        color="primary"
      />
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            {testimonials.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <TestiCard
                  text={item.text}
                  name={item.name}
                  rating={item.rating}
                />
              </div>
            ))}
          </Carousel>
          <IconButton
            className={cx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
            size="large"
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <IconButton
            className={cx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
            size="large"
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
