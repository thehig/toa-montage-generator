import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Terrain = () => (
  <Paper>
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="subheading">Terrain</Typography>
      </Grid>
      <Grid item xs={6}>
        <select>
          <option value="Low" />
          <option value="Med" />
          <option value="High" />
        </select>
      </Grid>
    </Grid>
  </Paper>
);

export default Terrain;