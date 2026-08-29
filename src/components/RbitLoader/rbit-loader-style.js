import { alpha } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'rbit_loader' })(theme => ({
  root: {
    position: 'fixed',
    inset: 0,
    zIndex: theme.zIndex.modal + 20,
    display: 'grid',
    placeItems: 'center',
    backgroundColor: alpha(theme.palette.background.default, 0.96),
    backdropFilter: 'blur(10px)',
  },
  panel: {
    width: 'min(320px, calc(100vw - 48px))',
    minHeight: 188,
    padding: theme.spacing(3),
    borderRadius: 8,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.16)}`,
    backgroundColor: alpha(theme.palette.background.paper, 0.98),
    boxShadow: '0 20px 60px rgba(15, 23, 42, 0.12)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
  },
  logo: {
    width: 156,
    height: 64,
    objectFit: 'contain',
    borderRadius: 4,
    animation: '$logoPulse 1400ms ease-in-out infinite',
  },
  progress: {
    width: 172,
    height: 4,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: alpha(theme.palette.primary.main, 0.14),
    '& span': {
      display: 'block',
      width: '42%',
      height: '100%',
      borderRadius: 'inherit',
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      animation: '$progressSweep 1150ms ease-in-out infinite',
    },
  },
  label: {
    color: theme.palette.text.secondary,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 0,
  },
  '@keyframes logoPulse': {
    '0%, 100%': {
      opacity: 0.88,
      transform: 'translateY(0) scale(1)',
    },
    '50%': {
      opacity: 1,
      transform: 'translateY(-2px) scale(1.015)',
    },
  },
  '@keyframes progressSweep': {
    '0%': {
      transform: 'translateX(-115%)',
    },
    '100%': {
      transform: 'translateX(250%)',
    },
  },
  '@media (prefers-reduced-motion: reduce)': {
    logo: {
      animation: 'none',
    },
    progress: {
      '& span': {
        width: '66%',
        animation: 'none',
      },
    },
  },
}));

export default useStyles;
