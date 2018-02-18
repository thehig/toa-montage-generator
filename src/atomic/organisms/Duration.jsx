import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';
const styles = theme => ({
  root: {
    width: "100%"
  }
});

const Duration = ({classes}) => (
  <Paper className={classes.root}>
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Typography variant="subheading">Duration</Typography>
      </Grid>
      <Grid item xs={6}>
        <div id="slider" />
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(Duration);