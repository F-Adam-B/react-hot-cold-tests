import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
    it('showing the state correctly rendering', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        // expect(wrapper.state('correctAnswer')).toEqual(number)
    });
    it('updates the state when new game is started', () => {
        const wrapper = shallow(<Game />);
        wrapper.instance().newGame()
        expect(wrapper.state('guesses')).toEqual([])
        expect(wrapper.state('feedback')).toEqual('Make your guess!')
    })


})