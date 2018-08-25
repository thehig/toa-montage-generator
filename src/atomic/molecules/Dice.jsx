import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';

import MUIgreen from 'material-ui/colors/green';
import MUIred from 'material-ui/colors/red';

import { D20 } from '../';

const green = MUIgreen[200];
const red = MUIred[200];

const styles = theme => ({
  root: {
    width: "30%",
    height: theme.spacing.unit * 12,
  },
  dice: {
    height: "100%"
  },
  container: {
    height: "100%"
  },
  gridItem: {
    height: "100%"
  }
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
    <Grid container className={classes.container}>
      <Grid item xs={3} className={classes.gridItem}>
        <D20
          className={classes.dice}
          value={roll}
          color={success === true ? green : red}
          {...diceProps}
        />
      </Grid>
      <Grid item xs={3} className={classes.gridItem}>
        { name && <Typography variant="body1">{name}</Typography> }
        { modifier && <Typography variant="body1">Modifier {`${modifier > 0 && "+"}${modifier}`}</Typography> }
        { versus && <Typography variant="body1">Versus {versus}</Typography> }
        { advantage && <Typography variant="body1">Advantage</Typography> }
        { disadvantage && <Typography variant="body1">Disadvantage</Typography> }
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(Dice);
