import React from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles'

import { OrgDuration, OrgNavigation, OrgTerrain, OrgPace } from '../';

const styles = theme => ({
});

const List = ({classes}) => (
  <div>
    <OrgNavigation />
    <OrgTerrain />
    <OrgPace />
    <OrgDuration />
  </div>
);

export default withStyles(styles)(List);