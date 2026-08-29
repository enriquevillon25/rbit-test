import React from 'react';
import logo from 'public/images/logo-rbit.jpg';
import useStyles from './rbit-loader-style';

interface RbitLoaderProps {
  open: boolean;
  label?: string;
}

export default function RbitLoader({
  open,
  label = 'Cargando RBIT',
}: RbitLoaderProps) {
  const { classes } = useStyles();

  if (!open) {
    return null;
  }

  return (
    <div className={classes.root} role="status" aria-live="polite" aria-label={label}>
      <div className={classes.panel}>
        <img className={classes.logo} src={logo} alt="" aria-hidden="true" />
        <div className={classes.progress} aria-hidden="true">
          <span />
        </div>
        <span className={classes.label}>{label}</span>
      </div>
    </div>
  );
}
