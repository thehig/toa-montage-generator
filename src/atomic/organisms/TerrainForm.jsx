import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';

import MUICard, { CardActions, CardContent } from 'material-ui/Card';
import { MenuItem } from 'material-ui/Menu';
import MUIButton from 'material-ui/Button';
import MUITypography from 'material-ui/Typography';

import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import RefreshIcon from 'material-ui-icons/Refresh';
import { TextField, SelectField, CheckboxGroup } from '../';

import { terrain } from '../../logic/consts';

const styles = theme => ({});

const TerrainForm = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <form onSubmit={handleSubmit}>
      <MUICard className={classes.card}>
        <CardContent>
          <MUITypography className={classes.title}>
            Terrain
          </MUITypography>
          
          <Field
            name="terrain"
            key="terrain"
            component={SelectField}
            label="Terrain">
            { terrain.map(t => <MenuItem key={`terrain-${t.id}`} value={t.id}>{t.name}</MenuItem>) }
          </Field>
          
        </CardContent>
      </MUICard>
      
      <MUIButton
        aria-label="reset"
        disabled={submitting}
        fullWidth
        variant="raised"
        onClick={reset}>
        <RefreshIcon />
      </MUIButton>
      <MUIButton
        type="submit"
        color="secondary"
        aria-label="go"
        fullWidth
        variant="raised"
        disabled={submitting}>
        <PlayArrowIcon />
      </MUIButton>
    </form>
  );
};

// const validate = values => {
//   const errors = {};
//   const requiredFields = [
//     'modifier',
//     'pace',
//     'speed',
//     'navigationDC',
//     'encounterDC',
//     'numdays',
//   ];
//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = 'Required';
//     }
//   });
//   return errors;
// };

export default reduxForm({
  form: 'TerrainForm', // a unique identifier for this form
  initialValues: {
    // modifier: 3,
    // pace: 'normal',
    // speed: 'walk',
    // navigationDC: 15,
    // encounterDC: 19,
    // numdays: 10,
    // "nav-advantage": ""
  },
  // validate,
})(withStyles(styles)(TerrainForm));
