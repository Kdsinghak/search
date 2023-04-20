import React from 'react';
import renderer from 'react-test-renderer';
import {Login} from '../src/screens/auth';

test('Check login', () => {
  const login = renderer.create(<Login />).toJSON();
  expect(login).toMatcSnapshot();
});
