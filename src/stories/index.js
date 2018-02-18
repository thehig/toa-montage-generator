import React from 'react';

import { OrgDuration, OrgNavigationCheck, OrgTerrain, OrgPace, EcoList } from '../atomic';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

const organisms = storiesOf('3.Organisms', module);
const ecosystems = storiesOf('4.Ecosystems', module);
organisms.add('Duration', () => <OrgDuration />);
organisms.add('NavigationCheck', () => <OrgNavigationCheck />);
organisms.add('Terrain', () => <OrgTerrain />);
organisms.add('Pace', () => <OrgPace />);
ecosystems.add('List', () => <EcoList />);
