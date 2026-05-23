import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import useStyles from './cards-style';

interface CategoryProps {
  img: string;
  imgAlt?: string;
  desc: string;
  title: string;
}

function Category(props: CategoryProps) {
  const { classes } = useStyles();
  const {
    img,
    imgAlt,
    title,
    desc
  } = props;
  return (
    <div className={classes.cardWrap}>
      <ButtonBase
        className={classes.categoryCard}
        focusRipple
        href="#"
      >
        <span className={classes.property}>
          <Typography component="span" className={classes.title}>
            {title}
          </Typography>
          <Typography component="span" className={classes.descCategory}>
            {desc}
          </Typography>
        </span>
        <span className={classes.figure}>
          <img src={img} alt={imgAlt || title} />
        </span>
      </ButtonBase>
    </div>
  );
}

export default Category;
