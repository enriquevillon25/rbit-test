import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import { shadowTokens } from '../../theme/tokens';

const useStyles = makeStyles({ uniqId: 'banner' })((theme, _params, classes) => ({
  decoTop: {},
  decoBottom: {},
  heroContent: {
    position: 'relative',
    overflow: 'hidden',
    background: theme.palette.background.default,
    padding: theme.spacing(9.5, 0, 5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(7.5, 0, 4),
    }
  },
  bannerContainer: {
    position: 'relative',
    alignItems: 'center',
    minHeight: 560,
    [theme.breakpoints.down('md')]: {
      minHeight: 'auto',
    }
  },
  bannerText: {
    position: 'relative',
    zIndex: 10,
    padding: theme.spacing(4.5, 0),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(3.5, 0),
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 1, 1.5),
      maxWidth: 640,
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center'
    }
  },
  title: {
    marginBottom: theme.spacing(2),
    position: 'relative',
    display: 'inline-block',
    '& h3': {
      position: 'relative'
    },
    '&:before': {
      content: '""',
      height: 20,
      // background: theme.palette.mode === 'light' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      opcity: theme.palette.mode === 'light' ? 1 : 0.7,
      width: '90%',
      position: 'absolute',
      bottom: 10,
      left: 0,
      zIndex: 0,
      [theme.breakpoints.down('sm')]: {
        height: 10,
        left: '5%'
      }
    },
  },
  subtitle: {
    marginBottom: theme.spacing(3.25),
    fontSize: 21,
    lineHeight: 1.45,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18
    }
  },
  primaryCta: {
    padding: theme.spacing(1.15, 3),
    minWidth: 260,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minWidth: 0,
    }
  },
  heroMeta: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(1.25),
    maxWidth: 540,
    marginTop: theme.spacing(2.25),
    color: theme.palette.text.secondary,
    fontSize: 14,
    lineHeight: 1.6,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  imageGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      order: -1,
      justifyContent: 'center',
    },
  },
  heroImageCard: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    maxWidth: 540,
    marginTop: theme.spacing(2.5),
    borderRadius: 10,
    border: `1px solid ${alpha(theme.palette.common.black, 0.06)}`,
    boxShadow: theme.palette.mode === 'light' ? '0 18px 38px rgba(0, 0, 0, 0.13)' : shadowTokens.paperDarkStrong,
    background: theme.palette.background.paper,
    '& img': {
      display: 'block',
      width: '100%',
      height: 440,
      objectFit: 'cover',
      objectPosition: 'center center',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: 500,
      '& img': {
        height: 410,
      },
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: 640,
      marginTop: theme.spacing(1),
      '& img': {
        height: 340,
      },
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: 8,
      '& img': {
        height: 250,
      },
    }
  },
  searchBanner: {
    position: 'relative',
    marginTop: theme.spacing(3),
    fontSize: 18,
    overflow: 'visible',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
    }
  },
  search: {
    fontSize: 18,
    width: '100%',
    '& input': {
      borderRadius: 10,
      padding: theme.spacing(4, 7, 3, 1),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4, 10, 3, 3)
      }
    },
    '& label': {
      fontSize: 20,
      left: theme.spacing(3),
      top: 4,
    },
    '& label + div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    }
  },
  action: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  button: {
    width: 48,
    height: 48,
    color: theme.palette.primary.main,
    '& svg': {
      width: 48
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
