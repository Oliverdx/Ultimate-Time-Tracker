import React from 'react';
import renderer from 'react-test-renderer';
import TimeCard from '../components/timeCard';

describe('TimeCard component test', () => {

  const time = {
    id: 0,
    day: '2021-01-01',
    start: '',
    exit: '',
    lunchexit: '',
    lunchreturn: ''
  }

  it('Should render correctly', () => {
    const component = renderer.create(<TimeCard time={time}/>).toJSON();
    expect(component).toMatchSnapshot();
  });
    
});