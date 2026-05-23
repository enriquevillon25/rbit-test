import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import useStyles from './cards-style';

interface CategoryProps {
  img: string;
  desc: string;
  title: string;
}

function Category(props: CategoryProps) {
  const { classes } = useStyles();
  const {
    img,
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
          <img src={img} alt="img" />
        </span>
      </ButtonBase>
    </div>
  );
}

export default Category;
