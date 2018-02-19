import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Radio, { RadioGroup } from 'material-ui/Radio';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import TextField from 'material-ui/TextField';

import { withStyles } from 'material-ui/styles';
const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Navigation extends React.Component {
  state = {
    value: 'normal',
    bonus: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleNameChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl
        component="fieldset"
        className={classes.formControl}
      >
        <FormLabel component="legend">Navigation</FormLabel>
        <RadioGroup
          aria-label="navigation"
          name="navigation"
          className={classes.group}
          value={this.state.value}
          onChange={this.handleChange}
          row
        >
          <FormControlLabel value="disadv" control={<Radio />} label="Disadvantage" />
          <FormControlLabel value="normal" control={<Radio />} label="Normal" />
          <FormControlLabel value="adv" control={<Radio />} label="Advantage" />
        </RadioGroup>
        <FormLabel component="legend">Survival Bonus</FormLabel>
        <TextField
          id="bonus"
          className={classes.textField}
          value={this.state.bonus}
          onChange={this.handleNameChange('bonus')}
          type="number"
        />
      </FormControl>
    );
  }
}

export default withStyles(styles)(Navigation);
