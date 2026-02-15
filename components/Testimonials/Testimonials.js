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
    name: "Cliente de larga duración",
  },
  {
    text: "Llevé mi móvil con un problema grave y lo solucionaron rápido y a buen precio. Servicio transparente y profesional.",
    name: "Peter Johansson",
  },
  {
    text: "Los mejores profesionales en recuperación de datos. Recuperaron mi disco duro de 10TB cuando lo daba por perdido.",
    name: "Jose Antonio Rodriguez",
  },
  {
    text: "Siempre resuelve cualquier problema informático, grande o pequeño. Servicio rápido, eficiente y de primera.",
    name: "Jessika Klingspor",
  },
  {
    text: "Me dejó el ordenador como nuevo. Trato cercano y profesional. Excelente trabajo.",
    name: "Luis Tajada",
  },
  {
    text: "Reparó mi iPhone rápidamente en fechas complicadas. Siempre bien atendido.",
    name: "Laure Zizine",
  },
  {
    text: "Instalación en casa impecable. Profesional de toda confianza.",
    name: "Joaquim Clos",
  },
  {
    text: "Profesional rápido, inteligente y muy amable. Precio acorde a la calidad que recibes.",
    name: "Nicolas Cortes",
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
                  title={item.title}
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
