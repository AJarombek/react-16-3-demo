/**
 * Component used to scroll to the top of the page when navigating with React Router.
 * Source: https://stackoverflow.com/a/54343182
 * @author Andrew Jarombek
 * @since 1/25/2020
 */

import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

const ScrollToTop = ({history}) => {
  // This effect is invoked when the component first renders, and then is never called again.
  // This is due to the second argument being empty.
  useEffect(() => {
    return history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (null);
};

export default withRouter(ScrollToTop);
