import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Navigation = () => (
  <Paper>
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="subheading">Navigation</Typography>
      </Grid>
      <Grid item xs={6}>
        <div/>
      </Grid>
    </Grid>
  </Paper>
);

export default Navigation;