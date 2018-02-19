import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Select from 'material-ui/Select';

import { withStyles } from 'material-ui/styles';

import terrainTypes from '../../data/terrain';

const styles = theme => ({
  root: {
    width: "100%"
  },
  select: {
    width: "100%"
  }
});

const Terrain = ({classes}) => (
  <Paper className={classes.root}>
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Typography variant="subheading">Terrain</Typography>
      </Grid>
      <Grid item xs={6}>
        <Select native className={classes.select}>
          { terrainTypes.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </Select>
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(Terrain);