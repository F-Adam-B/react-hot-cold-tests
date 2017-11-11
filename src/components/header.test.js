import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('showing the state correctly rendering', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.state('showInfoModal')).toEqual(false)
    })

})