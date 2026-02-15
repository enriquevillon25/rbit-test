import React, { useRef } from "react";
import Carousel from "react-slick";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "next-i18next";
import Title from "../Title";
import TestiCard from "../Cards/Testimonial";
import useStyle from "./testi-style";

const testiContent = [
  {
    text: "José es nuestro informático de confianza desde hace años. Profesional, rápido y con un trato excelente. 100% recomendable.",
    name: "Andrea deDo",
    rating: 5,
  },
  {
    text: "Llevé mi móvil con un problema grave y lo solucionaron rápido y a buen precio. Servicio transparente y profesional.",
    name: "Peter Johansson",
    rating: 5,
  },
  {
    text: "Los mejores profesionales en recuperación de datos. Recuperaron mi disco duro de 10TB cuando lo daba por perdido.",
    name: "Jose Antonio Rodriguez",
    rating: 5,
  },
  {
    text: "Siempre resuelve cualquier problema informático, grande o pequeño. Servicio rápido, eficiente y de primera.",
    name: "Jessika Klingspor",
    rating: 5,
  },
  {
    text: "Me dejó el ordenador como nuevo. Trato cercano y profesional. Excelente trabajo.",
    name: "Luis Tajada",
    rating: 4.5,
  },
  {
    text: "Reparó mi iPhone rápidamente en fechas complicadas. Siempre bien atendido.",
    name: "Laure Zizine",
    rating: 5,
  },
  {
    text: "Instalación en casa impecable. Profesional de toda confianza.",
    name: "Joaquim Clos",
    rating: 4.9,
  },
  {
    text: "Profesional rápido, inteligente y muy amable. Precio acorde a la calidad que recibes.",
    name: "Nicolas Cortes",
    rating: 5,
  },
];

function Testimonials() {
  // Translation function
  const { t } = useTranslation("common");

  const slider = useRef(null);
  const { classes, cx } = useStyle();
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
            {testiContent.map((item, index) => (
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
