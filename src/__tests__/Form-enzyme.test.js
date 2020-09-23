import React from 'react';
import { mount } from 'enzyme';
import Form from '../components/Form';
import enzymeConfig from '../enzymeConfig';

describe('<Form>', () => {

  it('Should clear input value onSubmit', () => {
    let component = mount(<Form />);
    const input = component.find('input').at(0);
    const button = component.find('button').at(0);

    input.invoke('onChange')({target: {value: 'luna'}})
    expect(component.find('input').prop('value')).toEqual('luna');

    button.invoke('onClick')();
    expect(component.find('input').prop('value')).toEqual('');
  });

  it('Should disable submit button onSubmit', () => {
    const component = mount(<Form />);
    const input = component.find('input').at(0);
    const button = component.find('button').at(0);

    input.invoke('onChange')({target: {value: 'luna'}})
    expect(component.find('input').prop('value')).toEqual('luna');

    button.invoke('onClick')();
    expect(component.find('button').last().prop('disabled')).toBeTruthy();
  });
})
