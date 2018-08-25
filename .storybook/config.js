import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// https://www.npmjs.com/package/@storybook/addon-options
setOptions({
  goFullScreen: true  
});

function loadStories() {
  require('../src/atomic/atoms/stories');
  require('../src/atomic/molecules/stories');
  require('../src/atomic/organisms/stories');
  require('../src/atomic/environment/stories');
}

configure(loadStories, module);
