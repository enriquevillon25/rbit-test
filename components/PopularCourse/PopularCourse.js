import React, { useRef, useState } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import DotParallax from '../Parallax/Dots';
import Title from '../Title';
import GeneralCard from '../Cards/General';
import useStyle from './popular-course-style';
import  RepairPCImage from 'public/images/education/repair-ordenador.webp';

const courseData = [
  {
    img: RepairPCImage,
    title: 'Reparar Ordenadores',
    rating: 5,
    price: 50,
    desc:
      'Arregla tu '
  },
  {
    img: RepairPCImage,
    title: 'Reparar Pórtatiles',
    rating: 4,
    price: 10,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: RepairPCImage,
    title: 'Reparar Macbook',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: RepairPCImage,
    title: 'Vivamus sit amet',
    rating: 3,
    price: 25,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: RepairPCImage,
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: RepairPCImage,
    title: 'Vivamus sit amet',
    rating: 5,
    price: 40,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  }
];

function PopularCourse() {
  const slider = useRef(null);
  const { t } = useTranslation('common');
  const [loaded, setLoaded] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const lastSlide = Math.floor(courseData.length - 2);
  const { classes, cx } = useStyle();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    variableWidth: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  if (theme.direction === 'rtl') {
    const lastSlide = Math.floor(courseData.length - 2);
    slider.current.slickGoTo(lastSlide);
  }

  return (
    <div className={classes.root}>
      <div className={classes.parallaxWrap}>
        <DotParallax />
      </div>
      <Container>
        <div className={classes.floatingTitle}>
          <Title
            head={t('education-landing.popular_title')}
            desc={t('education-landing.popular_desc')}
            align={isMobile ? 'center' : 'left'}
            color="primary"
            dark
          />
        </div>
      </Container>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={cx(classes.props, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {courseData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <GeneralCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={cx(classes.props, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
        </div>
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
  );
}

export default PopularCourse;
