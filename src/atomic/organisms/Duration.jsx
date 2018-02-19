import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import Input from 'material-ui/Input';

import { withStyles } from 'material-ui/styles';
const styles = theme => ({
  root: {
    width: "100%"
  },  
  select: {
    width: "100%"
  }
});

class Duration extends React.Component {
  state = {
    duration: 1,
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
        <FormLabel component="legend">Duration in days: {this.state.duration}</FormLabel>
        <Input
          id="duration"
          className={classes.textField}
          value={this.state.duration}
          onChange={this.handleNameChange('duration')}
          type="range"
        />
      </FormControl>
    );
  }
}

export default withStyles(styles)(Duration);