import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/List';
import Collapse from '@material-ui/core/transitions/Collapse';
import Chip from '@material-ui/core/Chip';

import InboxIcon from 'material-ui-icons/MoveToInbox';
import TodayIcon from 'material-ui-icons/Today';
import NavigationIcon from 'material-ui-icons/Map';
import EncounterIcon from 'material-ui-icons/Colorize';
import WeatherIcon from 'material-ui-icons/WbSunny';

import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';

import { Day } from '../';

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

class MontageOutput extends React.Component {
  state = { days: [] };

  handleDayClick = (evt, day) => {
    const { days } = this.state;
    const index = days.indexOf(day.index);

    let newValue = [...days];
    if (index > -1) {
      newValue.splice(index, 1);
    } else {
      newValue.push(day.index);
    }

    this.setState({ days: newValue });
  };



  render() {
    const {
      classes,
      montage: { days, completed, reasonsForStopping, lost },
    } = this.props;

    console.log('montage', this.props.montage);

    const distance = days.reduce((prev, next) => prev + next.navigation.distance, 0);

    return (
      <List
        component="div"
        subheader={
          <ListSubheader component="div">{`${days.length} days, ${distance} hexes. ${!completed && " Stopped: [" + reasonsForStopping.join(', ') + "]"}`}</ListSubheader>
        }>
        {days.map(day => <Day key={day.index} day={day} />)}
      </List>
    );
  }
}

MontageOutput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MontageOutput);
