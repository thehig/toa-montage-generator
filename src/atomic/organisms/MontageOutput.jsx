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

  render() {
    const {
      classes,
      montage: { days, completed, reasonsForStopping, distance, lost },
    } = this.props;

    console.log('montage', this.props.montage);

    return (
      <List
        component="div"
        subheader={
          <ListSubheader component="div">Montage Output</ListSubheader>
        }>
        {days.map(day => [
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
            <ListItem key={`${day.index}-nav`} className={classes.outerList}>
              <ListItemIcon>
                <NavigationIcon />
              </ListItemIcon>

              {console.log(day.navigation)}
              <ListItemText
                inset
                primary={`Navigation (DC${
                  day.navigation.rolls[0].options.versus
                })`}
              />
            </ListItem>
            <List key={`${day.index}-nav-list`} component="div" disablePadding>
              {/* NAVIGATION */}
              <ListItem className={classes.innerList}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText
                  inset
                  primary={`${day.navigation.rolls[0].roll}`}
                  secondary={
                    <span>
                      {day.navigation.rolls[0].options.advantage && (
                        <Chip label="Advantage" />
                      )}{day.navigation.rolls[0].options.disadvantage && (
                        <Chip label="Disadvantage" />
                      )}{day.navigation.rolls[0].options.modifier && (
                        <Chip label={`Modifier ${day.navigation.rolls[0].options.modifier}`} />
                      )}
                    </span>
                  }
                />
              </ListItem>
            </List>
            <ListItem key={`${day.index}-enc`} className={classes.outerList}>
              <ListItemIcon>
                <EncounterIcon />
              </ListItemIcon>
              <ListItemText
                inset
                primary={`Encounters (DC${
                  day.encounters[0].encounterRoll.options.versus
                })`}
              />
            </ListItem>
            <List key={`${day.index}-enc-list`} component="div" disablePadding>
              {/* ENCOUNTERS */}
              {day.encounters.map((encounter, index) => (
                <ListItem
                  key={`${day.index}-enc-${index}-list`}
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
            </List>
            <ListItem key={`${day.index}-wea`} className={classes.outerList}>
              <ListItemIcon>
                <WeatherIcon />
              </ListItemIcon>
              <ListItemText inset primary="Weather" />
            </ListItem>
            <List key={`${day.index}-wea-list`} component="div" disablePadding>
              {/* WEATHER */}
              {day.weather.map((weather, index) => (
                <ListItem
                  key={`${day.index}-enc-${index}-list`}
                  className={classes.innermostList}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary={`${weather.effect.name}`} />
                </ListItem>
              ))}
            </List>
          </Collapse>,
        ])}
      </List>
    );
  }
}

MontageOutput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MontageOutput);
