import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Duration = () => (
  <Paper>
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="subheading">Duration</Typography>
      </Grid>
      <Grid item xs={6}>
        <div id="slider" />
      </Grid>
    </Grid>
  </Paper>
);

export default Duration;