import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import { D20 } from '../';

const styles = theme => ({
  root: {
    width: theme.spacing.unit * 12,
    height: theme.spacing.unit * 6
  },
  dice: {
    display: "inline",
    height: "100%"
  }
});

const Dice = ({
  classes,

  roll,
  rolls,
  success,
  options: { modifier, advantage, disadvantage, name, versus } = {},
} = {}) => (
  <Paper className={classes.root}>
    <D20 className={classes.dice} value={roll} />
  </Paper>
);

export default withStyles(styles)(Dice);
