import React from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "@material-ui/core/styles";

import MUICard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MenuItem from "@material-ui/core/MenuItem";
import MUIButton from "@material-ui/core/Button";
import MUITypography from "@material-ui/core/Typography";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import RefreshIcon from "@material-ui/icons/Refresh";
import { TextField, SelectField, CheckboxGroup } from "../";

const styles = theme => ({});

const MontageForm = props => {
  const { handleSubmit, /* pristine, */ reset, submitting, classes } = props;
  return (
    <form onSubmit={handleSubmit}>
      <MUICard className={classes.card}>
        <CardContent>
          <MUITypography className={classes.title}>
            Montage settings
          </MUITypography>
          <Field
            name="numdays"
            key="numdays"
            component={TextField}
            label="Number of days to travel for"
            type="number"
          />
          <Field
            name="encounterDC"
            key="encounterDC"
            component={TextField}
            label="Encounter DC (higher is less likely)"
            type="number"
          />
          <Field
            name="speed"
            key="speed"
            component={SelectField}
            label="Speed (affects hexes travelled)"
          >
            <MenuItem value="walk">Walking</MenuItem>
            <MenuItem value="boat">Boating</MenuItem>
          </Field>
          <Field
            name="starts-lost"
            key="starts-lost"
            component={CheckboxGroup}
            options={[{ value: "lost", label: "Montage starts Lost" }]}
          />
          <Field
            name="daysoffset"
            key="daysoffset"
            component={TextField}
            label="Offset for number of days past"
            type="number"
          />
        </CardContent>
      </MUICard>
      <MUICard className={classes.card}>
        <CardContent>
          <MUITypography className={classes.title}>
            Navigation Check
          </MUITypography>
          <Field
            name="navigationDC"
            key="navigationDC"
            component={TextField}
            label="Navigation DC"
            type="number"
          />
          <Field
            name="pace"
            key="pace"
            component={SelectField}
            label="Pace (affects navigation DC & hexes travelled) "
          >
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
            component={CheckboxGroup}
            options={[
              { value: "advantage", label: "Advantage" },
              { value: "disadvantage", label: "Disadvantage" }
            ]}
          />
        </CardContent>
      </MUICard>

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
        color="secondary"
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
  const requiredFields = [
    "modifier",
    "pace",
    "speed",
    "navigationDC",
    "encounterDC",
    "numdays"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

export default reduxForm({
  form: "MontageForm", // a unique identifier for this form
  initialValues: {
    modifier: 3,
    pace: "normal",
    speed: "walk",
    navigationDC: 15,
    encounterDC: 19,
    numdays: 10,
    "nav-advantage": ""
  },
  validate
})(withStyles(styles)(MontageForm));
