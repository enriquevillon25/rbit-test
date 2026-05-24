import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import flag from 'public/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  openDrawer: {},
  header: {
    height: 'auto',
    color: theme.palette.text.primary,
    background: alpha(theme.palette.background.paper, 0.96),
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.05)}`,
    backdropFilter: 'blur(10px)',
    transition: 'all 0.5s ease-out',
    position: 'fixed',
    zIndex: 1200,
    '& .MuiContainer-root': {
      padding: 0
    },
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    },
    '& nav': {
      transition: 'all 0.5s ease-out',
    },
    [`&.${classes.fixed}`]: {
      position: 'fixed',
      top: 0,
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.09)',
      background: alpha(theme.palette.background.paper, 0.98),
      zIndex: 1000,
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
          '& span': {
            display: 'none'
          }
        },
        '& img': {
          height: 54,
          width: 96,
          margin: 0
        }
      },
      [`& .${classes.bar}`]: {
        [theme.breakpoints.down('md')]: {
          backgroundColor: theme.palette.text.secondary,
          '&:after, &:before': {
            backgroundColor: theme.palette.text.secondary
          }
        }
      },
      '& nav': {
        padding: 0
      },
      [`& .${classes.icon}`]: {
        '& svg': {
          fill: theme.palette.text.secondary
        }
      },
      [`& .${classes.navMenu}`]: {
        [theme.breakpoints.up('sm')]: {
          padding: '12px 8px'
        }
      },
      [`& .${classes.navAuth}`]: {
        '& a': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
        },
        [`& .${classes.deco}`]: {
          display: 'none'
        }
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
      boxShadow: 'none',
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 86,
    padding: theme.spacing(0.75, 0),
    [theme.breakpoints.down('sm')]: {
      minHeight: 76,
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
    },
    '& nav': {
      alignItems: 'center',
      display: 'flex',
      height: 'auto'
    }
  },
  logo: {
    textAlign: 'center',
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.text.primary,
      textTransform: 'uppercase',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 'normal',
      '& span': {
        display: 'none'
      }
    },
    '& img': {
      margin: 0,
      display: 'block',
      transition: 'all 0.3s ease-out',
      width: 126,
      height: 72,
      objectFit: 'contain',
      [theme.breakpoints.down('sm')]: {
        height: 56,
        width: 116
      }
    }
  },
  active: {},
  invert: {},
  navLogo: {
    padding: theme.spacing(0, 1),
    [`&.${classes.invert}`]: {
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      [`& .${classes.mobileMenu}`]: {
        [`& .${classes.bar}`]: {
          [theme.breakpoints.down('md')]: {
            backgroundColor: theme.palette.text.secondary,
            '&:after, &:before': {
              backgroundColor: theme.palette.text.secondary
            },
          }
        }
      },
    }
  },
  text: {
    position: 'relative',
    zIndex: 1
  },
  navMenu: {
    marginLeft: 'auto',
    padding: theme.spacing(1.5, 1),
    '& > *': {
      margin: 0,
      [theme.breakpoints.up('lg')]: {
        margin: theme.spacing(0, 1),
      }
    },
    [`&.${classes.invert}`]: {
      '& ul': {
        '& li': {
          '& a': {
            transition: 'all 0.3s ease-out',
            color: theme.palette.text.primary,
          }
        }
      }
    },
    '& ul': {
      listStyle: 'none',
      paddingLeft: theme.spacing(3),
      '& li': {
        [theme.breakpoints.up('lg')]: {
          margin: theme.spacing(0, 0.35),
        },
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          marginTop: theme.spacing(0.5),
          textTransform: 'uppercase',
          background: 'none !important',
          boxShadow: 'none',
          position: 'relative',
          padding: theme.spacing(1, 1.15),
          margin: 0,
          minWidth: 0,
          borderRadius: 999,
          fontSize: 13,
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.text.primary,
          '&:after': {
            content: '""',
            height: 8,
            background: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
            width: '0%',
            position: 'absolute',
            bottom: 10,
            zIndex: 0,
            left: '50%',
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            background: `${alpha(theme.palette.primary.main, 0.06)} !important`,
            '&:after': {
              width: '55%',
              left: '22%',
              background: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
            '&:after': {
              borderBottomColor: theme.palette.primary.light,
              width: '60%',
              left: 6,
            },
          }
        }
      }
    }
  },
  navActions: {
    padding: theme.spacing(1.5, 0),
    marginLeft: theme.spacing(2),
    gap: theme.spacing(1),
  },
  locationLink: {
    color: `${theme.palette.primary.main} !important`,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
    background: `${alpha(theme.palette.primary.main, 0.05)} !important`,
    borderRadius: 999,
    minWidth: 0,
    padding: `${theme.spacing(0.8, 1.35)} !important`,
    fontSize: 12,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    '& .MuiButton-startIcon': {
      marginRight: theme.spacing(0.5),
      '& svg': {
        fontSize: 17,
      },
    },
    '&:hover': {
      borderColor: alpha(theme.palette.primary.main, 0.34),
      background: `${alpha(theme.palette.primary.main, 0.09)} !important`,
    },
  },
  locationPrimary: {
    position: 'relative',
    top: 1,
  },
  languageButton: {
    borderRadius: 999,
    minWidth: 78,
    padding: theme.spacing(0.75, 1.5),
    fontSize: 13,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    background: alpha(theme.palette.background.paper, 0.82),
    '& .MuiButton-startIcon': {
      marginRight: theme.spacing(0.75),
      '& svg': {
        fontSize: 18,
      }
    },
    '& .MuiButton-endIcon': {
      marginLeft: theme.spacing(0.25),
      '& svg': {
        fontSize: 18,
      }
    },
    '&:hover': {
      background: alpha(theme.palette.primary.main, 0.08),
    },
  },
  languageButtonMobile: {
    width: '100%',
    justifyContent: 'center',
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1.25, 1.5),
    fontSize: 15,
  },
  navAuth: {
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    padding: '28px 24px 28px 0',
    '& a': {
      fontSize: 16,
      margin: theme.spacing(0, 1.5)
    }
  },
  textBtn: {
    paddingTop: '4px !important',
    paddingBottom: '4px !important',
    color: theme.palette.common.white
  },
  btnWhite: {
    border: `1px solid ${theme.palette.primary.main}`,
    lineHeight: '21px',
    color: theme.palette.primary.dark + '!important',
    background: theme.palette.common.white,
    '&:hover': {
      background: alpha(theme.palette.common.white, 0.8),
    }
  },
  deco: {
    width: 500,
    height: 300,
    borderRadius: 40,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
    transform: 'rotate(-10deg)',
    position: 'absolute',
    right: -140,
    top: -190
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': {
      ...flagIcon
    }
  },
  modeMenu: {
    textTransform: 'capitalize',
  },
  icon: {},
  setting: {
    [`& .${classes.icon}`]: {
      padding: 0,
      fontSize: 32,
      transition: 'all 0.3s ease',
      [theme.breakpoints.up('sm')]: {
        color: theme.palette.common.white,
      },
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  titleMenu: {
    textTransform: 'capitalize'
  },
  bar: {},
  menu: {},
  menuOpen: {},
  paperNav: {
    width: '100%',
    [theme.breakpoints.up(680)]: {
      width: 320,
    },
  },
  mobileMenu: {
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      }
    }
  },
  mobileNav: {
    background: theme.palette.background.paper,
    [`& .${classes.menu}`]: {
      padding: theme.spacing(3, 4, 4),
      overflow: 'auto',
      top: theme.spacing(10),
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 112px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      },
    }
  },
  mobileLanguage: {
    padding: theme.spacing(0, 2),
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  },
  dividerSidebar: {
    background: theme.palette.divider,
    margin: '1rem 0'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
