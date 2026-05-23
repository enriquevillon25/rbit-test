import React from 'react';
import Typography from '@mui/material/Typography';
import { useText } from 'theme/common';
import useStyles from './title-style';

type TitleAlign = 'left' | 'right' | 'center';
type TitleColor = 'primary' | 'secondary';

interface TitleProps {
  align?: TitleAlign;
  head: string;
  desc?: string;
  color?: TitleColor;
  dark?: boolean;
}

export default function Title(props: TitleProps) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const {
    align, head, desc,
    color, dark
  } = props;
  const setAlign = (alignment?: TitleAlign) => {
    switch (alignment) {
      case 'left':
        return classes.left;
      case 'right':
        return classes.right;
      case 'center':
        return classes.center;
      default:
        return classes.left;
    }
  };
  const setColor = (clr?: TitleColor) => {
    if (clr === 'secondary') {
      return classes.secondary;
    }
    return classes.primary;
  };
  return (
    <div className={cx(setAlign(align), classes.title, dark && classes.dark)}>
      <Typography component="h2" variant="h4" className={cx(setColor(color), text.title)}>
        <span>
          {head}
        </span>
      </Typography>
      {/* <Typography className={cx(classes.desc, text.subtitle2)}>
        {desc}
      </Typography> */}
    </div>
  );
}

Title.defaultProps = {
  align: 'left',
  dark: false,
  desc: '',
  color: 'primary',
};
