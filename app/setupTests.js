/**
 * Setup Enzyme with the React adapter.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
