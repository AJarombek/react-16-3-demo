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
      'aqua', 'aquamarine', 'lightskyblue'
    ];

    this.buttonRef = createRef();
    this.state = {
      clicks: 0,
      prevColor: 'none'
    };
  }

  /**
   * Action to perform when the button is clicked.  In this scenario, the 'clicks' state variable
   * will change.  This enables the button to rotate its color.
   */
  onButtonClick() {
    this.setState({clicks: this.state.clicks + 1})
  }

  /**
   * Send the color of the button before DOM updates to {@code componentDidUpdate()}.
   * @param prevProps The previous props this component used.
   * @param prevState The previous state this component had.
   * @return {{color}} An object containing a single property - color.  Color represents the color
   * of the button prior to the DOM update.
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      color: this.buttonRef.current.style.backgroundColor
    }
  }

  /**
   * After the DOM is updated, check to see if the color of the button changed.  If so, save
   * the old color to the component state.
   * @param prevProps The previous props this component used.
   * @param prevState The previous state this component had.
   * @param snapshot An object passed from {@code getSnapshotBeforeUpdate()}
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null && snapshot.color !== this.buttonRef.current.style.backgroundColor) {
      this.setState({
        prevColor: snapshot.color
      });
    }
  }

  /**
   * Render the component displaying a colored button and a label with the prior button color.
   * @return {*} React elements.
   */
  render() {
    return (
      <div className="snapshot-before-update">
        <button
          ref={this.buttonRef}
          onClick={() => this.onButtonClick()}
          style={{backgroundColor: this.colors[this.state.clicks % 3]}}>

          {this.colors[this.state.clicks % 3].toUpperCase()}
        </button>
        <p>Previous Color: <strong>{this.state.prevColor}</strong></p>
      </div>
    )
  }
}

export default SnapshotBeforeUpdate;
