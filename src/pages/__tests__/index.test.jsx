import React from 'react';
import { shallow } from 'enzyme';

import Index from '../index';

describe('pages/index', () => {
    test('renders hello world', () => {
        expect(shallow(<Index />).contains(<div>Hello, world!</div>)).toBe(
            true
        );
    });
});
