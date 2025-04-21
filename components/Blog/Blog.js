import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Paper from '@mui/material/Paper';
import PlayIcon from '@mui/icons-material/PlayArrow';
import Grid from '@mui/material/Grid';
import Carousel from 'react-slick';
import YouTube from 'react-youtube';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import yt from 'youtube';
import Title from '../Title';
import BlogCard from '../Cards/Blog';
import useStyles from './blog-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function Blog() {
  const { classes } = useStyles();
  const blogData = [
    {
      title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
      category: 'Science - Math',
      date: 'Feb 08 2021'
    },
    {
      title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
      category: 'Science - Math',
      date: 'Feb 08 2021'
    },
    {
      title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
      category: 'Science - Math',
      date: 'Feb 08 2021'
    }
  ];

  // translation
  const { t } = useTranslation('common');

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Carousel
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 750,
    fade: true,
    arrows: false,
  };

  // Youtube Video
  const [player, setPlayer] = useState([]);
  const [videoId, setVideoId] = useState('6p0VM-yUpGk');
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = id => {
    if (yt.use) {
      setVideoId(id);
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'http://localhost:3011'
    }
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('education-landing.blog_video')}
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId={videoId}
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      {!isTablet && (
        <div className={classes.deco} />
      )}
      {/* <Container fixed>
        <Box p={isDesktop ? 6 : 0}>
          <Title
            head={t('education-landing.blog_title')}
            desc={t('education-landing.blog_desc')}
            align="left"
            color="secondary"
          />
          <Grid container spacing={isDesktop ? 10 : 6} direction={isDesktop ? 'row-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <div className={classes.videoWrap}>
                <div className={classes.videoCarousel}>
                  <Carousel {...settings}>
                    <Paper className={classes.item}>
                      <img src={imgAPI.education[14]} alt="cover" />
                      <IconButton
                        className={classes.playBtn}
                        onClick={() => handleClickOpen('6p0VM-yUpGk')}
                        size="large"
                      >
                        <PlayIcon />
                      </IconButton>
                    </Paper>
                    <Paper className={classes.item}>
                      <img src={imgAPI.education[15]} alt="cover" />
                      <IconButton
                        className={classes.playBtn}
                        onClick={() => handleClickOpen('HBeJA3q19mk')}
                        size="large"
                      >
                        <PlayIcon />
                      </IconButton>
                    </Paper>
                    <Paper className={classes.item}>
                      <img src={imgAPI.education[16]} alt="cover" />
                      <IconButton
                        className={classes.playBtn}
                        onClick={() => handleClickOpen('6p0VM-yUpGk')}
                        size="large"
                      >
                        <PlayIcon />
                      </IconButton>
                    </Paper>
                    <Paper className={classes.item}>
                      <img src={imgAPI.education[17]} alt="cover" />
                      <IconButton
                        className={classes.playBtn}
                        onClick={() => handleClickOpen('HBeJA3q19mk')}
                        size="large"
                      >
                        <PlayIcon />
                      </IconButton>
                    </Paper>
                  </Carousel>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.blogList}>
                {blogData.map((item, index) => (
                  <div key={index.toString()}>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={-200}
                      delay={(index * 0.2)}
                      duration={0.6}
                    >
                      <div>
                        <BlogCard
                          category={item.category}
                          title={item.title}
                          date={item.date}
                        />
                      </div>
                    </ScrollAnimation>
                  </div>
                ))}
                <Button color="secondary" className={classes.more}>More</Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container> */}
    </div>
  );
}

export default Blog;
