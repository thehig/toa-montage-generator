import { configure, addDecorator } from '@storybook/react';
import { MuiProvider } from './decorators';

function loadStories() {
  require('../src/atomic/atoms/stories');
  require('../src/atomic/molecules/stories');
  require('../src/atomic/organisms/stories');
}

configure(loadStories, module);
