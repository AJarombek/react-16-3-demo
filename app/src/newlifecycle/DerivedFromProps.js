/**
 * Demonstrate how to use the {@code getDerivedStateFromProps()} method.
 * @author Andrew Jarombek
 * @since 1/19/2020
 */

import React from 'react';
import PropTypes from 'prop-types';

class DerivedFromProps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      secretCode: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    // Assert that this lifecycle method does not have access to the component instance.
    console.assert(this === undefined);

    if (props.show) {
      return { secretCode: 1231 };
    } else {
      return { secretCode: 0 };
    }
  }

  render() {
    return (
      <div className="derived-from-props">
        { this.state.secretCode === 1231 ?
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
  }
}

DerivedFromProps.propTypes = {
  show: PropTypes.bool.isRequired
};

export default DerivedFromProps;
