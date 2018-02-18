import React from 'react';
import Paper from 'material-ui/Paper';

const Pace = () => (
  <Paper>
    <div>Pace</div>
    <select>
      <option value="Slow" />
      <option value="Normal" />
      <option value="Fast" />
    </select>
  </Paper>
);

export default Pace;