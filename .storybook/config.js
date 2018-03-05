import { configure, addDecorator } from '@storybook/react';
import { MuiProvider } from './decorators';

function loadStories() {
  require('../src/stories/field-components');
  require('../src/stories/montage-components');
}

configure(loadStories, module);
