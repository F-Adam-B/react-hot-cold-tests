import React from 'react';
import { shallow, mount, render } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should switch to info modal when what button is clicked', () => {
        const wrapper = shallow(<TopNav />);
        wrapper.simulate('click');
        expect(wrapper.hasClass('what'));
    });

})