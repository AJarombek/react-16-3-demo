/**
 * Outline for a feature page in the application.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

import React from 'react';
import {useHistory} from 'react-router-dom';
import {AJNavTextCircle} from 'jarombek-react-components';

const FeaturePage = ({children}) => {
    const history = useHistory();

    return (
        <div>
            <AJNavTextCircle
                active={true}
                height="30px"
                direction="left"
                text="Home"
                textSide="right"
                onClick={() => history.push('/')}
            />
            {children}
        </div>
    );
};

export default FeaturePage;
