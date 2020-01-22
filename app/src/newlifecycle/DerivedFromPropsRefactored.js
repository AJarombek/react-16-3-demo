/**
 * Refactoring of the {@code getDerivedStateFromProps()} sample component to be stateless.
 * @author Andrew Jarombek
 * @since 1/21/2020
 */

import React from 'react';
import PropTypes from 'prop-types';

const DerivedFromPropsRefactored = ({show}) => {
  return (
    <div className="derived-from-props">
      { show ?
        <p className="secret-code">
          You have a beautiful heart.
        </p>
        :
        <div className="secret-code-classified">
          <p>CLASSIFIED</p>
        </div>
      }
    </div>
  )
};

DerivedFromPropsRefactored.propTypes = {
  show: PropTypes.bool.isRequired
};

export default DerivedFromPropsRefactored;
