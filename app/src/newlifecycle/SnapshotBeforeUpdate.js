/**
 * Demonstrate how to use the {@code getSnapshotBeforeUpdate()} method.
 * @author Andrew Jarombek
 * @since 1/25/2020
 */

import React, {createRef} from 'react';

class SnapshotBeforeUpdate extends React.Component {

  constructor(props) {
    super(props);

    // CSS built-in colors: http://www.colors.commutercreative.com/grid/
    this.colors = [
      'aqua', 'aquamarine', 'cyan'
    ];

    this.buttonRef = createRef();
    this.state = {
      clicks: 0,
      prevColor: 'none'
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // TODO
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // TODO
  }

  render() {
    return (
      <div className="snapshot-before-update">
        <button ref={this.buttonRef}>
          Click Me!
        </button>
        <p>Previous Color: <strong>{this.state.prevColor}</strong></p>
      </div>
    )
  }
}

export default SnapshotBeforeUpdate;
