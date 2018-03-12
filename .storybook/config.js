import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-knobs/register';
import { MuiProvider } from './decorators';

function loadStories() {
  require('../src/atomic/atoms/stories');
  require('../src/atomic/molecules/stories');
  require('../src/atomic/organisms/stories');
  require('../src/atomic/environment/stories');
}

configure(loadStories, module);
