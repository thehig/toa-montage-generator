import React from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles'

import { OrgDuration, OrgNavigationCheck, OrgTerrain, OrgPace } from '../';

const styles = theme => ({
});

const List = ({classes}) => (
  <Grid container>
    <Grid item xs={12}><OrgDuration /></Grid>
    <Grid item xs={12}><OrgNavigationCheck /></Grid>
    <Grid item xs={12}><OrgTerrain /></Grid>
    <Grid item xs={12}><OrgPace /></Grid>
  </Grid>
);

export default withStyles(styles)(List);