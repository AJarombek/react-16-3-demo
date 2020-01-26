/**
 * Component used to scroll to the top of the page when navigating with React Router.
 * Source: https://stackoverflow.com/a/54343182
 * @author Andrew Jarombek
 * @since 1/25/2020
 */

import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

const ScrollToTop = ({history}) => {
  useEffect(() => {
    const scrollListener = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      scrollListener();
    }
  }, []);

  return (null);
};

export default withRouter(ScrollToTop);
