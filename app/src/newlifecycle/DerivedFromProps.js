/**
 * Demonstrate how to use the {@code getDerivedStateFromProps()} method.
 * @author Andrew Jarombek
 * @since 1/19/2020
 */

import React from 'react';

class DerivedFromProps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {

  }

  render() {
    return (
      <div> </div>
    )
  }
}

export default DerivedFromProps;
