const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <FormControl error={Boolean(touched && error)}>
    <TextField
      error={Boolean(touched && error)}
      label={error || label}
      {...input}
      {...custom}
    />
  </FormControl>
);

const renderCheckbox = ({ input, meta: { touched, error }, label }) => (
  <FormControlLabel
    error={touched && error ? error : null}
    control={
      <Checkbox
        checked={input.value ? true : false}
        onChange={input.onChange}
      />
    }
    label={label}
  />
);

const renderRadioGroup = ({ input, meta: { touched, error }, ...rest }) => (
  <FormControl error={Boolean(touched && error)}>
    <RadioButtonGroup
      {...input}
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  </FormControl>
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={Boolean(touched && error)}>
    <SelectField
      {...input}
      onChange={event => input.onChange(event.target.value)}
      onBlur={event => {}}
      // https://github.com/erikras/redux-form/issues/2768
      children={children}
      {...custom}
    />
    <FormHelperText>{error || label}</FormHelperText>
  </FormControl>
);
