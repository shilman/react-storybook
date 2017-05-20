import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Button from './Button';

storiesOf('Another Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
