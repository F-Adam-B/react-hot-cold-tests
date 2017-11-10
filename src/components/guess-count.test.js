import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

})