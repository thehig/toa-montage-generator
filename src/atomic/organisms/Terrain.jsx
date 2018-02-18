import React from 'react';
import Paper from 'material-ui/Paper';

const Terrain = () => (
  <Paper>
    <div>Terrain Navigation Difficulty</div>
    <select>
      <option value="Low" />
      <option value="Med" />
      <option value="High" />
    </select>
  </Paper>
);

export default Terrain;