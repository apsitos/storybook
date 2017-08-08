import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button'

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello</button>
  ))
  .add('without text', () => (
    <button onClick={action('clicked')}></button>
  ))
