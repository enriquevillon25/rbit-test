import { makeStyles } from "tss-react/mui";

const subscribeStyles = makeStyles({ uniqId: "subscribe" })((theme) => ({
  root: {
    position: "relative",
    textAlign: "center",
    paddingTop: theme.spacing(3),
  },
  parallaxWrap: {
    height: 220,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: 180,
    },
  },
  form: {
    background: theme.palette.background.paper,
    maxWidth: 700,
    margin: "0 auto",
    marginTop: theme.spacing(-32),
    width: "100%",
    display: "block",
    // color: theme.palette.text.secondary,
    position: "relative",
    bottom: theme.spacing(-6),
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(5, 8),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
    },
    "& h4": {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(2.5),
    },
    "& p": {
      maxWidth: 560,
      margin: "0 auto",
      marginBottom: theme.spacing(3.25),
      lineHeight: "28px",
    },
  },
  field: {
    margin: theme.spacing(3, 0, 4),
  },
  button: {
    margin: "0 auto",
    minWidth: 260,
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: 0,
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default subscribeStyles;
