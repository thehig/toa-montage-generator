import React from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
  },
  select: {
    width: '100%',
  },
});

class Pace extends React.Component {
  state = {
    pace: 'normal'
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="pace">Pace</InputLabel>
        <Select
          value={this.state.pace}
          onChange={this.handleChange}
          inputProps={{
            name: 'pace',
            id: 'pace',
          }}
        >
          <MenuItem value='slow'>Slow</MenuItem>
          <MenuItem value='normal'>Normal</MenuItem>
          <MenuItem value='fast'>Fast</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Pace);
