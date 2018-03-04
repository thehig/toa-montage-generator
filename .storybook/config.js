import { configure, addDecorator } from '@storybook/react';
import { MuiProvider } from './decorators';

function loadStories() {
  require('../src/stories/field-components');
}

configure(loadStories, module);
