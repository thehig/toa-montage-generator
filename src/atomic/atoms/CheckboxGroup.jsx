import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import MUICheckbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { withStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const styles = (/* theme */) => ({
  root: {},
  fullWidth: {
    width: '100%'
  },
  group: {
    display: 'flex'
  },
  item: {
    flexGrow: 1
  }
});

export const CheckboxGroup = ({
  input,
  fullWidth,
  label,
  meta: { touched, error },
  options,
  classes,
  ...rest
}) => (
  <FormControl
    component="fieldset"
    error={Boolean(touched && error)}
    fullWidth
    className={cn(classes.root, fullWidth && classes.fullWidth)}
  >
    {label && <FormLabel component="legend">{label}</FormLabel>}
    <FormGroup className={classes.group} {...rest}>
      {options.map((option, i) => {
        const content = (
          <FormControlLabel
            key={i}
            className={classes.item}
            control={<MUICheckbox />}
            {...option}
            checked={input.value.indexOf(option.value) >= 0}
            onChange={e => {
              let newValue = [...input.value];
              if (e.target.checked) {
                newValue.push(option.value);
              } else {
                newValue.splice(newValue.indexOf(option.value), 1);
              }
              return input.onChange(newValue);
            }}
          />
        );

        return option.tooltip ? (
          <Tooltip title={option.tooltip} key={i} placement="top-end">
            {content}
          </Tooltip>
        ) : (
          content
        );
      })}
    </FormGroup>
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

CheckboxGroup.propTypes = {
  input: PropTypes.object,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }),
  options: PropTypes.array,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxGroup);
