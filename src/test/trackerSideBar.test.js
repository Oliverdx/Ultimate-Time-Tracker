import React from 'react';
import renderer from 'react-test-renderer';
import TrackerSidebar from '../components/trackerSidebar';

describe('TrackerSideBar component test', () => {

    it('Should render correctly', () => {
      const component = renderer.create(<TrackerSidebar />).toJSON();
      expect(component).toMatchSnapshot();
    });
    
});