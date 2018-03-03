import { configure, addDecorator } from '@storybook/react';
import { MuiProvider } from './decorators';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
