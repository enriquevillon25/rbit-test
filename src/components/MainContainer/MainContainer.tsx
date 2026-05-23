import React, { Fragment } from 'react';
import type { ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';
import Header from '../Header';
import Footer from '../Footer/Footer';

const useStyles = makeStyles({ uniqId: 'main_container' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
}));

interface MainContainerProps {
  onToggleDark: () => void;
  onToggleDir: () => void;
  children: ReactNode;
  invert?: boolean;
}

function MainContainer(props: MainContainerProps) {
  const { classes } = useStyles();
  const {
    onToggleDark, onToggleDir, 
    children, invert
  } = props;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert={invert}
        />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
}

MainContainer.defaultProps = {
  invert: false,
};

export default MainContainer;
