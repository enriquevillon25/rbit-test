import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import Rating from "@mui/material/Rating";
import useStyles from "./cards-style";

export default function Testimonial(props) {
  const { classes } = useStyles();
  const { name, rating, text } = props;
  const normalizeRating = (value) => {
    if (!value) return 0;

    const decimal = value % 1;

    if (decimal >= 0.75) {
      return Math.ceil(value);
    }

    if (decimal >= 0.25) {
      return Math.floor(value) + 0.5;
    }

    return Math.floor(value);
  };

  const finalRating = normalizeRating(Number(rating));
  console.log("finalRating", finalRating);
  return (
    <div className={classes.testimonial}>
      <div className={classes.icon}>
        <QuoteIcon />
      </div>
      <Typography className={classes.text} display="block">
        {text}
      </Typography>
      <Typography variant="h6">{name}</Typography>
      <Rating
        value={Number(finalRating) || 0}
        precision={0.5}
        readOnly
      />
    </div>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
};
