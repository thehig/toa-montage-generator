import React from 'react';

import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();

// const MuiProvider = function () {
//   return function (getStory) {
//     return <MuiThemeProvider theme={theme}>{getStory()}</MuiThemeProvider>;
//   }
// }

// export const MuiProvider = () => getStory => (
//   <MuiThemeProvider theme={theme}>{getStory()}</MuiThemeProvider>
// );
