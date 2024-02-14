import React from 'react';
import renderer from 'react-test-renderer';
import InputTime from '../components/inputTime';

describe('InputTime component test', () => {

    it('Should render correctly', () => {
      const component = renderer.create(<InputTime updateTime={() => {}}/>).toJSON();
      expect(component).toMatchSnapshot();
    });
    
});