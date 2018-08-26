import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Field, reduxForm, formValueSelector } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';

import MUICard from '@material-ui/core/Card';
import MUICardContent from '@material-ui/core/CardContent';

import MUIMenuItem from '@material-ui/core/MenuItem';
import MUIButton from '@material-ui/core/Button';
import MUITypography from '@material-ui/core/Typography';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RefreshIcon from '@material-ui/icons/Refresh';
import { TextField, SelectField, CheckboxGroup, Slider, RadioButtonGroup } from '..';

const styles = theme => ({
  root: {
    // background: 'red'
  },
  card: {
    padding: theme.spacing.unit
    // backgroundColor: 'red'
  },
  title: {
    // padding: theme.spacing.unit
  },
  navigation: {
    color: 'orange'
  },
  travel: {
    color: 'blue'
  },
  terrainDC: {
    padding: theme.spacing.unit
  }
});

const navigation = ({ classes }) => (
  <MUICard className={classes.card}>
    <MUICardContent>
      <MUITypography variant="body2" className={cn(classes.title, classes.navigation)}>
        Navigation
      </MUITypography>
      <Field
        name="navDC"
        key="navDC"
        component={Slider}
        label="Nav DC [$value$]"
        sublabel="(higher is harder)"
        min={1}
        max={30}
        step={1}
      />
      <Field
        name="encChance"
        key="encChance"
        component={Slider}
        label="Encounter DC [$value$]"
        sublabel="(higher is less common)"
        min={1}
        max={20}
        step={1}
      />
      <Field
        fullWidth
        name="speed"
        key="speed"
        component={RadioButtonGroup}
        label="Speed"
        tooltip="affects hexes travelled"
        options={[
          { label: 'Walking (base speed 1 hex per day)', value: 'walk' },
          { label: 'Boating (base speed 2 hex per day)', value: 'boat' }
        ]}
      />
      <Field
        fullWidth
        name="pace"
        key="pace"
        component={RadioButtonGroup}
        label="Pace"
        tooltip="affects navigation DC & hexes travelled"
        options={[
          { label: 'Slow (50/50 chance of -1 hex, Navigation DC -5)', value: 'slow' },
          { label: 'Normal', value: 'normal' },
          { label: 'Fast (50/50 chance of +1 hex, Navigation DC +5)', value: 'fast' }
        ]}
      />
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
          { value: 'disadvantage', label: 'Disadvantage' }
        ]}
      />
    </MUICardContent>
  </MUICard>
);

const travel = ({ classes }) => (
  <MUICard className={classes.card}>
    <MUICardContent>
      <MUITypography variant="body2" className={cn(classes.title, classes.travel)}>
        Travel
      </MUITypography>
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
  const requiredFields = ['terrain', 'speed', 'pace', 'modifier', 'numdays'];
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
  initialValues: {
    navDC: 15,
    encChance: 20,
    speed: 'walk',
    pace: 'normal',
    modifier: 3,
    numdays: 10
  },
  validate
})(withStyles(styles)(MontageOptions));
