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

  weather = (weathers, index) => {
    const { classes } = this.props;

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
  };

  encounters = (encounters, index) => {
    const { classes } = this.props;

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
  };

  navigation = ({ rolls, startedLost, pace, speed, paceMod, success, lost, distance } = {}, index) => {
    const { classes } = this.props;
    return [
      <ListItem key={`${index}-nav`} className={classes.outerList}>
        <ListItemIcon>
          <NavigationIcon />
        </ListItemIcon>
        <ListItemText
          inset
          primary={`Navigation (DC${rolls[0].options.versus})`}
        />
      </ListItem>,
      <List key={`${index}-nav-list`} component="div" disablePadding>
        {/* NAVIGATION */}
        <ListItem className={classes.innerList}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText
            inset
            primary={`${rolls[0].roll}`}
            secondary={
              <span>
                {rolls[0].options.advantage && (
                  <Chip label="Advantage" />
                )}
                {rolls[0].options.disadvantage && (
                  <Chip label="Disadvantage" />
                )}
                {rolls[0].options.modifier && (
                  <Chip
                    label={`Modifier ${rolls[0].options.modifier}`}
                  />
                )}
              </span>
            }
          />
        </ListItem>
      </List>,
    ];
  };

  day = day => {
    const { classes } = this.props;

    return [
      <ListItem
        key={`${day.index}-day`}
        button
        onClick={evt => this.handleDayClick(evt, day)}>
        <ListItemIcon>
          <TodayIcon />
        </ListItemIcon>
        <ListItemText inset primary={`Day ${day.index}`} />
        {this.state.days.indexOf(day.index) > -1 ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItem>,
      <Collapse
        key={`${day.index}-day-list`}
        in={this.state.days.indexOf(day.index) > -1}
        timeout="auto"
        unmountOnExit>
        {this.navigation(day.navigation, day.index)}
        {this.encounters(day.encounters, day.index)}
        {this.weather(day.weather, day.index)}
      </Collapse>,
    ];
  };

  render() {
    const {
      classes,
      montage: { days, completed, reasonsForStopping, distance, lost },
    } = this.props;

    return (
      <List
        component="div"
        subheader={
          <ListSubheader component="div">Montage Output</ListSubheader>
        }>
        {days.map(data => this.day(data))}
      </List>
    );
  }
}

MontageOutput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MontageOutput);
