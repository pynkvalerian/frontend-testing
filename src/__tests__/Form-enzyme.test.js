import React from 'react';
import { mount } from 'enzyme';
import Form from '../components/Form';
import enzymeConfig from '../enzymeConfig';

describe('<Form>', () => {
  it('Should clear input value onSubmit', () => {
    const component = mount(<Form />);
    const input = component.find('input').getDOMNode();
    const button = component.find('button').last();

    input.value = 'Luna';

    expect(component.find('input').prop('value')).toEqual('Luna');

    button.simulate('click');

    expect(component.find('input').prop('value')).toEqual('');
  });

  it('Should disable submit button onSubmit', () => {
    const component = mount(<Form />);
    const input = component.find('input').getDOMNode();

    input.value = 'Luna';

    component.find('button').last().simulate('click');

    expect(component.find('button').last().prop('disabled')).toBeTruthy();
  });
})
