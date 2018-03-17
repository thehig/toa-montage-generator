import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Chip from 'material-ui/Chip';

import InboxIcon from 'material-ui-icons/MoveToInbox';
import TodayIcon from 'material-ui-icons/Today';
import NavigationIcon from 'material-ui-icons/Map';
import EncounterIcon from 'material-ui-icons/Colorize';
import WeatherIcon from 'material-ui-icons/WbSunny';

import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  outerList: {
    paddingLeft: theme.spacing.unit * 4,
  },
  innerList: {
    paddingLeft: theme.spacing.unit * 8,
  },
  innermostList: {
    paddingLeft: theme.spacing.unit * 8,
  },
});

class Weathers extends React.Component {
  render() {
    const { classes, weathers, index } = this.props;

    return [
      <ListItem key={`${index}-wea`} className={classes.outerList}>
        <ListItemIcon>
          <WeatherIcon />
        </ListItemIcon>
        <ListItemText inset primary="Weather" />
      </ListItem>,
      <List key={`${index}-wea-list`} component="div" disablePadding>
        {/* WEATHER */}
        {weathers.map((weather, index) => (
          <ListItem
            key={`${index}-enc-${index}-list`}
            className={classes.innermostList}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary={`${weather.effect.name}`} />
          </ListItem>
        ))}
      </List>,
    ];
  }
}

export default withStyles(styles)(Weathers);
