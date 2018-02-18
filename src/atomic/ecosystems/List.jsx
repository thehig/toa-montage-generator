import React from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles'

import { OrgDuration, OrgNavigation, OrgTerrain, OrgPace } from '../';

const styles = theme => ({
});

const List = ({classes}) => (
  <Grid container>
    <Grid item xs={12}><OrgNavigation /></Grid>
    <Grid item xs={12}><OrgTerrain /></Grid>
    <Grid item xs={12}><OrgPace /></Grid>
    <Grid item xs={12}><OrgDuration /></Grid>
  </Grid>
);

export default withStyles(styles)(List);