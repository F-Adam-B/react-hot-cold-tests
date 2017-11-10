import React from 'react';
import { shallow } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('renders one <GuessForm component', () => {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.find(GuessForm))
    })

})