import { configure, addDecorator } from '@storybook/react';
import { MuiProvider } from './decorators';
import { setOptions } from '@storybook/addon-options';

// https://www.npmjs.com/package/@storybook/addon-options
setOptions({
  goFullScreen: true  
});

function loadStories() {
  require('../src/atomic/environment/stories');
  require('../src/atomic/atoms/stories');
  require('../src/atomic/molecules/stories');
  require('../src/atomic/organisms/stories');
}

configure(loadStories, module);
