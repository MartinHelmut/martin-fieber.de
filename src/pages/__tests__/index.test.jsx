import React from 'react';
import { shallow } from 'enzyme';

import Index from '../index';

describe('pages/index', () => {
    test('renders hello world', () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find('p')).toHaveLength(1);
    });
});
