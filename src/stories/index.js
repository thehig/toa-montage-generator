import React from 'react';

import { OrgDuration, OrgNavigationCheck, OrgTerrain, OrgPace } from '../atomic';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

const organisms = storiesOf('3.Organisms', module);
organisms.add('Duration', () => <OrgDuration />);
organisms.add('NavigationCheck', () => <OrgNavigationCheck />);
organisms.add('Terrain', () => <OrgTerrain />);
organisms.add('Pace', () => <OrgPace />);
