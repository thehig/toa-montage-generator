import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Select from 'material-ui/Select';

import { withStyles } from 'material-ui/styles';
const styles = theme => ({
  root: {
    width: "100%"
  },
  select: {
    width: "100%"
  }
});

const Pace = ({classes}) => (
  <Paper className={classes.root}>
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Typography variant="subheading">Pace</Typography>
      </Grid>
      <Grid item xs={6}>
        <Select native className={classes.select}>
          <option value="Slow">Slow</option>
          <option value="Normal">Normal</option>
          <option value="Fast">Fast</option>
        </Select>
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(Pace);