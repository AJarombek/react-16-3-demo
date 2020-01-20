/**
 * Describe the createRef API introduced in React 16.3.
 * @author Andrew Jarombek
 * @since 1/12/2020
 */

import React from 'react';
import FeaturePage from './FeaturePage';
import RefSamples from './createref/RefSamples';
import { AJCodeSnippet } from 'jarombek-react-components';

const refsCodeSnippet =
`import React, {createRef} from 'react';
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
`;

const CreateRefDemo = () => {
  return (
    <FeaturePage>
      <h1>CreateRef API</h1>
      <div className="demo-body">
        <p>
          Refs are a feature I've known about and used since I first learned React. Refs
          provide a way to access a DOM node and use the DOM API. React is well known for its
          virtual DOM, a layer of abstraction on top of the DOM. Usually we interact with the
          virtual DOM in a declarative way, however Refs allow us to write traditional imperative
          DOM API code. Prior to React 16.3, there were two ways to create Refs.  The first was with
          a string and the second was with a callback function.  React 16.3 introduced a new way to
          create Refs with the <code>createRef()</code> method.
        </p>
        <p>
          All three Ref creation methods (callback function, string, <code>createRef()</code>)
          produce the same result.  The following example demonstrates how Refs are used to turn on
          light bulb images using the DOM API.
        </p>
        <RefSamples/>
        <p>
          This example is a single component written with the following code:
        </p>
        <AJCodeSnippet language="javascript">
          {refsCodeSnippet}
        </AJCodeSnippet>
        <p>
          Since this demo is specifically about React 16.3, I will not explain the string and
          callback function Refs.  However an important takeaway is that <code>createRef()</code>
          can be used to achieve the same result as these older approaches.
        </p>
        <p>
          The React team added <code>createRef()</code> because its more convenient than callback
          refs and is less buggy than string refs<sup>6</sup>.  However, all three options can still
          be used.
        </p>
        <p>
          Let me finish by briefly explaining the code sample I wrote.  Upon component construction,
          I assigned the variable <code>this.lightFigure3</code> to the result of
          <code>createRef()</code>.  <code>createRef()</code> creates a ref object.  In the
          <code>render()</code> function, the ref is attached to the <code>&lt;img&gt;</code> node
          using the <code>ref</code> attribute.
        </p>
        <AJCodeSnippet language="javascript">
          {`<img src={light} ref={this.lightFigure3} />`}
        </AJCodeSnippet>
        <p>
          Attaching a ref object to a React element like I did above causes the React element's DOM
          node to be attached to the ref object.  At this point calling the ref provides access to
          the DOM node and the DOM API.
        </p>
        <p>
          I also added an <code>onClick()</code> handler to the
          <code>&lt;AJOutlinedButton&gt;</code> component, which is a wrapper around a button
          element.  The arrow function invoked by the <code>onClick()</code> handler sets a value to
          <code>style.filter</code> on the referenced DOM node.  This sets a <code>filter</code> CSS
          style to the <code>img</code> node using the DOM API.  As a result, the light bulb image
          appears to light up.
        </p>
      </div>
    </FeaturePage>
  );
};

export default CreateRefDemo;
