/**
 * Example of a component that uses callback refs to focus upon an image.
 * @author Andrew Jarombek
 * @since 1/12/2020
 */

import React, {createRef} from 'react';
import { AJOutlinedButton } from 'jarombek-react-components';

import light from '../assets/light.png';

class RefSamples extends React.Component {

  constructor(props) {
    super(props);

    /* Callack Refs */
    this.lightFigure1 = null;

    this.setLightFigureRef = element => this.lightFigure1 = element;

    this.focusLightFigure1 = () => {
      if (this.lightFigure1) {
        this.lightFigure1.style.filter = 'brightness(5)';
      }
    };

    /* String Refs */
    this.focusLightFigure2 = () => {
      this.refs.lightFigure2.style.filter = 'brightness(5)';
    };

    /* createRef() Refs */
    this.lightFigure3 = createRef();

    this.focusLightFigure3 = () => this.lightFigure3.current.style.filter = 'brightness(5)';
  }

  render() {
    return (
      <div className="ref-samples">
        <div className="callback-ref-sample">
          <h3>Callback Ref</h3>
          <figure>
            <img src={light} ref={this.setLightFigureRef} />
          </figure>
          <AJOutlinedButton onClick={() => this.focusLightFigure1()} disabled={false}>
            Activate
          </AJOutlinedButton>
        </div>
        <div className="string-ref-sample">
          <h3>String Ref</h3>
          <figure>
            <img src={light} ref="lightFigure2" />
          </figure>
          <AJOutlinedButton onClick={() => this.focusLightFigure2()} disabled={false}>
            Activate
          </AJOutlinedButton>
        </div>
        <div className="createref-ref-sample">
          <h3>createRef() Ref</h3>
          <figure>
            <img src={light} ref={this.lightFigure3} />
          </figure>
          <AJOutlinedButton onClick={() => this.focusLightFigure3()} disabled={false}>
            Activate
          </AJOutlinedButton>
        </div>
      </div>
    );
  }
}

export default RefSamples;
