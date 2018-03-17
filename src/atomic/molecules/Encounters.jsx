import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

import EncounterIcon from 'material-ui-icons/Colorize';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
  outerList: {
    paddingLeft: theme.spacing.unit * 4,
  },
  innermostList: {
    paddingLeft: theme.spacing.unit * 8,
  },
});

class Encounters extends React.Component {
  render() {
    const { classes, encounters, index } = this.props;

    return [
      <ListItem key={`${index}-enc`} className={classes.outerList}>
        <ListItemIcon>
          <EncounterIcon />
        </ListItemIcon>
        <ListItemText
          inset
          primary={`Encounters (DC${
            encounters[0].encounterRoll.options.versus
          })`}
        />
      </ListItem>,
      <List key={`${index}-enc-list`} component="div" disablePadding>
        {/* ENCOUNTERS */}
        {encounters.map((encounter, index) => (
          <ListItem
            key={`${index}-enc-${index}-list`}
            className={classes.innermostList}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              inset
              primary={`${encounter.encounterRoll.roll}`}
              secondary={
                encounter.encounter !== false &&
                `Encounter #${encounter.encounter}`
              }
            />
          </ListItem>
        ))}
      </List>,
    ];
  }
}

export default withStyles(styles)(Encounters);