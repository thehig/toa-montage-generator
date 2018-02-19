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

import terrainTypes from '../../data/terrain';

class Terrain extends React.Component {
  state = {
    terrain: 0
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="terrain">Terrain</InputLabel>
        <Select
          value={this.state.terrain}
          onChange={this.handleChange}
          inputProps={{
            name: 'terrain',
            id: 'terrain',
          }}
        >
          { terrainTypes.map(t => <MenuItem key={t.id} value={t.id}>{t.name}</MenuItem>)}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Terrain);
