import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Field, reduxForm, formValueSelector } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';

import MUICard from '@material-ui/core/Card';
import MUICardContent from '@material-ui/core/CardContent';

import MUIButton from '@material-ui/core/Button';
import MUITypography from '@material-ui/core/Typography';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RefreshIcon from '@material-ui/icons/Refresh';
import { TextField, CheckboxGroup, Slider, RadioButtonGroup } from '..';

import config from '../../config';
const defaults = config.get('defaults');

const styles = theme => ({
  root: {},
  card: {
    margin: theme.spacing.unit
  },
  title: {
    paddingBottom: theme.spacing.unit * 2
  },
  navigation: {},
  travel: {}
});

const navigation = ({ classes }) => (
  <MUICard className={classes.card}>
    <MUICardContent>
      <MUITypography variant="title" className={cn(classes.title, classes.navigation)}>
        Navigation
      </MUITypography>
      <Field
        name="navDC"
        key="navDC"
        component={Slider}
        label={v => `Nav DC: [${v}]`}
        tooltip="(higher is harder)"
        min={1}
        max={30}
        step={1}
      />
      <Field
        name="encChance"
        key="encChance"
        component={Slider}
        label={v => `Encounter Chance: [${Math.floor(((21 - v) / 20) * 100)}%]`}
        tooltip="(higher is less common)"
        min={1}
        max={20}
        step={1}
      />
      <Field
        fullWidth
        row
        name="speed"
        key="speed"
        component={RadioButtonGroup}
        label="Speed"
        tooltip="affects hexes travelled"
        options={[
          { label: 'Walking', tooltip: 'base speed 1 hex per day', value: 'walk' },
          { label: 'Boating', tooltip: 'base speed 2 hex per day', value: 'boat' }
        ]}
      />
      <Field
        fullWidth
        row
        name="pace"
        key="pace"
        component={RadioButtonGroup}
        label="Pace"
        tooltip="affects navigation DC & hexes travelled"
        options={[
          { label: 'Slow', tooltip: ' Nav DC -5, Speed -1 (50% chance)', value: 'slow' },
          { label: 'Normal', value: 'normal' },
          { label: 'Fast', tooltip: ' Nav DC +5, Speed +1 (50% chance)', value: 'fast' }
        ]}
      />
      <Field
        name="modifier"
        key="nav-modifier"
        component={Slider}
        label={v => `Navigators total modifier: [${v > 0 ? '+' : ''}${v}]`}
        min={-20}
        max={20}
        step={1}
      />
      <Field
        name="nav-advantage"
        key="nav-advantage"
        row
        fullWidth
        component={CheckboxGroup}
        options={[
          { value: 'advantage', label: 'Advantage', tooltip: 'Roll twice and take the higher' },
          { value: 'disadvantage', label: 'Disadvantage', tooltip: 'Roll twice and take the lower' }
        ]}
      />
    </MUICardContent>
  </MUICard>
);

const travel = ({ classes }) => (
  <MUICard className={classes.card}>
    <MUICardContent>
      <MUITypography variant="title" className={cn(classes.title, classes.travel)}>
        Travel
      </MUITypography>
      <Field
        name="numdays"
        key="numdays"
        label={v => `Travel for [${v}] days`}
        component={Slider}
        min={0}
        max={30}
        step={1}
      />
      <Field
        name="daysoffset"
        key="daysoffset"
        component={TextField}
        label="Starting on day #"
        type="number"
        min="0"
      />
      <Field
        name="starts-lost"
        key="starts-lost"
        component={CheckboxGroup}
        options={[{ value: 'lost', label: 'Lost', tooltip: 'Is the navigator currently lost' }]}
      />
    </MUICardContent>
  </MUICard>
);

const MontageOptions = props => {
  const {
    handleSubmit,
    // pristine,
    reset,
    submitting,
    classes
  } = props;

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      {navigation(props)}

      {travel(props)}

      <MUIButton
        aria-label="reset"
        disabled={submitting}
        fullWidth
        variant="raised"
        onClick={reset}
      >
        <RefreshIcon />
      </MUIButton>

      <MUIButton
        type="submit"
        color="primary"
        aria-label="go"
        fullWidth
        variant="raised"
        disabled={submitting}
      >
        <PlayArrowIcon />
      </MUIButton>
    </form>
  );
};

const validate = values => {
  const errors = {};
  const requiredFields = ['speed', 'pace', 'numdays'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export const selector = formValueSelector('MontageOptions');

MontageOptions.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  classes: PropTypes.object
};

export default reduxForm({
  form: 'MontageOptions', // a unique identifier for this form
  initialValues: defaults,
  validate
})(withStyles(styles)(MontageOptions));
