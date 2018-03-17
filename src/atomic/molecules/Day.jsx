import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

import TodayIcon from 'material-ui-icons/Today';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

import { Navigation, Encounters, Weathers } from '../';

class Day extends React.Component {
  state = {
    expanded: false
  };

  handleDayClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, day } = this.props;
    const { expanded } = this.state;

    return [
      <ListItem
        key={`${day.index}-day`}
        button
        onClick={this.handleDayClick}>
        <ListItemIcon>
          <TodayIcon />
        </ListItemIcon>
        <ListItemText inset primary={`Day ${day.index}`} />
        {expanded ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItem>,
      <Collapse
        key={`${day.index}-day-list`}
        in={expanded}
        timeout="auto"
        unmountOnExit>
        <Navigation {...day.navigation} index={day.index} />
        <Encounters encounters={day.encounters} index={day.index} />
        <Weathers weathers={day.weather} index={day.index} />
      </Collapse>,
    ];
  }
};

export default Day;