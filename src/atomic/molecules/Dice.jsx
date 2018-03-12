import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import MUIgreen from 'material-ui/colors/green';
import MUIred from 'material-ui/colors/red';

const green = MUIgreen[200];
const red = MUIred[200];

import { D20 } from '../';

const styles = theme => ({
  root: {
    width: "100%",
    height: theme.spacing.unit * 12,
  },
  dice: {
    height: "100%"
  },
});

const Dice = ({
  classes,
  roll,
  rolls,
  success,
  options: { modifier, advantage, disadvantage, name, versus } = {},
  ...diceProps
} = {}) => (
  <Paper className={classes.root}>
    <D20
      className={classes.dice}
      value={roll}
      color={success === true ? green : red}
      {...diceProps}
    />
  </Paper>
);

export default withStyles(styles)(Dice);
