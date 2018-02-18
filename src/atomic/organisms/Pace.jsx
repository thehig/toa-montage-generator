import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Pace = () => (
  <Paper>
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="subheading">Pace</Typography>
      </Grid>
      <Grid item xs={6}>
        <select>
          <option value="Slow" />
          <option value="Normal" />
          <option value="Fast" />
        </select>
      </Grid>
    </Grid>
  </Paper>
);

export default Pace;