import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'lib/useTranslation';
import useClientMediaQuery from 'lib/useClientMediaQuery';
import { featuredServices } from 'data/siteContent';
import DotParallax from '../Parallax/Dots';
import Title from '../Title';
import GeneralCard from '../Cards/General';
import useStyle from './popular-course-style';

function PopularCourse() {
  const slider = useRef(null);
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isDesktop = useClientMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useClientMediaQuery(theme.breakpoints.down('sm'));

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
            {featuredServices.map((item, index) => (
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
