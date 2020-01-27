/**
 * Demonstrate a component that operates in strict mode.
 * @author Andrew Jarombek
 * @since 1/26/2020
 */

import React from 'react';

const StrictModeComponent = () => {
  return (
    <React.StrictMode>
      <StrictModeChild />
    </React.StrictMode>
  );
};

class StrictModeChild extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Prove that StrictMode will complain about the legacy componentWillUpdate() method.
   */
  componentWillUpdate(nextProps, nextState) {
    console.info('Inside componentWillUpdate');
  }

  render() {
    return (
      <div className="in-strict-mode">

      </div>
    )
  }
}

export default StrictModeComponent;
