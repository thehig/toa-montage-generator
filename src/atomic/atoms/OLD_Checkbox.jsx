import React from 'react';

import {
  // FormControl,
  // FormHelperText,
  FormGroup,
  FormControlLabel,
} from 'material-ui/Form';

// import { InputLabel as MUIInputLabel } from 'material-ui/Input';
import MUICheckbox from 'material-ui/Checkbox';

export const Checkbox = ({ input, meta: { touched, error }, label }) => (
  <FormGroup row>
    <FormControlLabel
      error={touched && error ? error : null}
      control={
        <MUICheckbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </FormGroup>
);

export default Checkbox;