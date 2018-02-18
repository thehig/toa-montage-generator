import React from 'react';

import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();

export const MuiProvider = () => getStory => (
  <MuiThemeProvider theme={theme}>
    {getStory()}
  </MuiThemeProvider>
);