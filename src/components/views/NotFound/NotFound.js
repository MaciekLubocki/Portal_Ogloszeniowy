import React from 'react';
import PropTypes from 'prop-types';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import styles from './NotFound.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Typography >
      <Link href="/">
        Go back to the homepage
      </Link>
    </Typography>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
