/**
 * Demonstrate a component that operates in strict mode.
 * @author Andrew Jarombek
 * @since 1/26/2020
 */

import React from 'react';

const StrictModeComponent = () => {
  return (
    <div className="strict-mode-component">
      <StrictModeChild className="outside-strict-mode"><p>Outside Strict Mode</p></StrictModeChild>
      <React.StrictMode>
        <StrictModeChild className="inside-strict-mode"><p>Inside Strict Mode</p></StrictModeChild>
      </React.StrictMode>
    </div>
  );
};

class StrictModeChild extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Prove that StrictMode will complain about the legacy UNSAFE_componentWillUpdate() method.
   */
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.info('Inside UNSAFE_componentWillUpdate');
  }

  render() {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    )
  }
}

export default StrictModeComponent;
export {StrictModeChild};
