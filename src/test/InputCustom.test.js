import React from 'react';
import { mount } from 'enzyme';
import InputCustom from '../components/inputCustom';

describe('InputCustom component test', () => {

    it('Should render a date input', () => {
        const component = mount(<InputCustom type="date"/>);
        const input = component.find('input');

        expect(input.instance().type).toEqual("date");
        expect(input.instance().type).not.toBe("time");
    });

    it('Should render a time input', () => {
        const component = mount(<InputCustom type="time"/>);
        const input = component.find('input');

        expect(input.instance().type).toEqual("time");
        expect(input.instance().type).not.toBe("date");
    });
    
});