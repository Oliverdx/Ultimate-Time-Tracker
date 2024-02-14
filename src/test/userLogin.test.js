import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import UserLogin from '../components/userLogin';

describe('UserLogin component test', () => {
  const user = {id: 0, name: 'Lorem Ipsum'};

    it('Should render correctly', () => {
      const component = renderer.create(<UserLogin  user={user}/>).toJSON();
      expect(component).toMatchSnapshot();
    });

    it('Should render user Login box with current name', () => {
      const userLoginBox = mount(<UserLogin  user={user}/>);
      expect(userLoginBox.find('h2').text()).toEqual(user.name);
    });
});