import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';

import MUICard, { CardActions, CardContent } from '@material-ui/core/Card';
import { MenuItem } from '@material-ui/core/Menu';
import MUIButton from '@material-ui/core/Button';
import MUITypography from '@material-ui/core/Typography';

import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import RefreshIcon from 'material-ui-icons/Refresh';
import { TextField, SelectField, CheckboxGroup } from '../';

import { terrain as Terrains } from '../../logic/consts';

const styles = theme => ({
  card: {
    padding: theme.spacing.unit,
  },
  title: {
    padding: theme.spacing.unit,
  },
  terrainDC: {
    padding: theme.spacing.unit,
  },
});

const TerrainForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    classes,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <MUICard className={classes.card}>
        <CardContent>
          <MUITypography variant='title' className={classes.title}>Navigation</MUITypography>
          <Field
            name="terrain"
            key="terrain"
            component={SelectField}
            label="Terrain">
            {Terrains.map(t => (
              <MenuItem key={`terrain-${t.id}`} value={t.id}>
                {t.name}
              </MenuItem>
            ))}
          </Field>
          <Field
            name="speed"
            key="speed"
            component={SelectField}
            label="Speed (affects hexes travelled)">
            <MenuItem value="walk">Walking</MenuItem>
            <MenuItem value="boat">Boating</MenuItem>
          </Field>
          <Field
            name="pace"
            key="pace"
            component={SelectField}
            label="Pace (affects navigation DC & hexes travelled) ">
            <MenuItem value="slow">Slow</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="fast">Fast</MenuItem>
          </Field>
          <Field
            name="modifier"
            key="nav-modifier"
            component={TextField}
            label="Navigators total modifier"
            type="number"
          />
          <Field
            name="nav-advantage"
            key="nav-advantage"
            row
            component={CheckboxGroup}
            options={[
              { value: 'advantage', label: 'Advantage' },
              { value: 'disadvantage', label: 'Disadvantage' },
            ]}
          />
        </CardContent>
      </MUICard>

      <MUICard className={classes.card}>
        <CardContent>
          <MUITypography variant='title' className={classes.title}>Travel</MUITypography>
          <Field
            name="numdays"
            key="numdays"
            component={TextField}
            label="Number of days to travel for"
            type="number"
          />
          <Field
            name="daysoffset"
            key="daysoffset"
            component={TextField}
            label="Offset for number of days past"
            type="number"
          />
          <Field
            name="starts-lost"
            key="starts-lost"
            component={CheckboxGroup}
            options={[{ value: 'lost', label: 'Lost' }]}
          />
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

const validate = values => {
  const errors = {};
  const requiredFields = [
    'terrain',
    'speed',
    'pace',
    'modifier',
    'numdays',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export const selector = formValueSelector('TerrainForm');

export default reduxForm({
  form: 'TerrainForm', // a unique identifier for this form
  initialValues: {
    terrain: 2,
    speed: 'walk',
    pace: 'normal',
    modifier: 3,
    numdays: 10,
  },
  validate,
})(withStyles(styles)(TerrainForm));
