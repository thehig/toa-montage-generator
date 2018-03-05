import React from 'react';

import {
  FormControl,
  // FormHelperText,
  // FormControlLabel,
} from 'material-ui/Form';

// import { InputLabel as MUIInputLabel } from 'material-ui/Input';
// import MUITextField from 'material-ui/TextField';
import { RadioGroup as MUIRadioGroup } from 'material-ui/Radio';
// import MUICheckbox from 'material-ui/Checkbox';

export const RadioGroup = ({ input, meta: { touched, error }, ...rest }) => (
  <FormControl error={Boolean(touched && error)}>
    <MUIRadioGroup
      {...input}
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  </FormControl>
);

export default RadioGroup;