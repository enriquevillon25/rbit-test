import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useText } from "theme/common";
import useStyles from "./cards-style";
import { handleWhatsApp } from "utils/sends";

interface GeneralProps {
  img: string;
  imgAlt?: string;
  title: string;
  desc: string;
  rating: number;
  price: number;
}

export default function General(props: GeneralProps) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { img, imgAlt, title, desc, rating, price } = props;
  return (
    <Paper className={classes.generalCard}>
      <figure>
        <img src={img} alt={imgAlt || title} />
      </figure>
      <div className={classes.desc}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography className={text.paragraph}>{desc}</Typography>
        {/* <div className={classes.property}>
          <div className={classes.rating}>
            {[...Array(rating)].map((e, index) => (
              <StarIcon className={classes.starIcon} key={index.toString()} />
            ))}
          </div>
          <strong>
            $
            {price}
          </strong>
        </div> */}
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
          onClick={handleWhatsApp}
        >
          Reservar
        </Button>
      </div>
    </Paper>
  );
}
