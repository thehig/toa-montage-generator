import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import TodayIcon from 'material-ui-icons/Today';
import NavigationIcon from 'material-ui-icons/Map';
import EncounterIcon from 'material-ui-icons/Colorize';
import WeatherIcon from 'material-ui-icons/WbSunny';

import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';

const DiceRoll = ({ options, roll, rolls }) => (
  <span>
    {options && options.name && `${options.name}: `}({rolls.join(', ')}){options &&
      options.versus &&
      ` v DC${options.versus}`}
  </span>
);

const MontageEncounter = ({ encounterRoll, encounter }) => (
  <span>
    <DiceRoll {...encounterRoll} />{' '}
    {encounter && <strong>{` #${encounter}`}</strong>}
  </span>
);

const MontageEncounters = ({ encounters }) => (
  <div>
    <h4>Encounters:</h4>
    <ul>
      {encounters.map((encounter, index) => (
        <li key={index}>
          <MontageEncounter {...encounter} />
        </li>
      ))}
    </ul>
  </div>
);

const MontageNavigation = ({
  navigation: {
    direction,
    distance,
    pace,
    paceMod,
    rolls,
    speed,
    startedLost,
    lost,
    becameLost,
    becameFound,
    success,
  },
}) => (
  <div>
    <h4>Navigation:</h4>
    <div>
      <h4>Options:</h4>
      <div>Pace: {pace}</div>
      <div>PaceMod: {paceMod}</div>
      <div>Speed: {speed}</div>
    </div>
    <div>
      <h4>Outcome:</h4>
      <div>Distance: {distance}</div>
      <div>
        Rolls:{' '}
        <ul>
          {rolls.map((roll, index) => (
            <li key={index}>
              <DiceRoll {...roll} />
            </li>
          ))}
        </ul>
      </div>
      <div>Success: {success ? 'true' : 'false'}</div>
      {lost && <div>LOST</div>}
      {startedLost && <div>STARTED LOST</div>}
      {becameLost && <div>Became Lost: {direction} </div>}
      {becameFound && <div>Became Found</div>}
    </div>
  </div>
);

const MontageWeather = ({ weatherRoll, name, effect }) => (
  <span>
    <DiceRoll {...weatherRoll} /> {name}
  </span>
);

const MontageWeathers = ({ weathers }) => (
  <div>
    <h4>Weather:</h4>
    <ul>
      {weathers.map((weather, index) => (
        <li key={index}>
          <MontageWeather {...weather} />
        </li>
      ))}
    </ul>
  </div>
);

const MontageDay = ({ day: { index, encounters, navigation, weather } }) => (
  <div>
    <h3>Day {index}</h3>
    <MontageNavigation navigation={navigation} />
    <MontageEncounters encounters={encounters} />
    <MontageWeathers weathers={weather} />
  </div>
);

const MontageDays = ({ days }) => (
  <div>
    <h2>Days:</h2>
    <ul>
      {days.map(day => (
        <li key={day.index}>
          <MontageDay day={day} />
        </li>
      ))}
    </ul>
  </div>
);

const MontageReasons = ({ reasons }) =>
  reasons && reasons.length && reasons.length > 0 ? (
    <div>
      <h4>Reasons for Stopping:</h4>
      <ul>{reasons.map(reason => <li key={reason}>{reason}</li>)}</ul>
    </div>
  ) : null;

const OldMontageOutput = props => {
  // return (
  //   <div>
  //     <div>
  //       <h4>Montage Completed:</h4> {completed ? 'yes' : 'no'}
  //     </div>
  //     <div>
  //       <h4>Distance Travelled:</h4> {distance} Hex(es)
  //     </div>
  //     {lost && (
  //       <div>
  //         <h2>Currently Lost</h2>
  //       </div>
  //     )}
  //     <MontageReasons reasons={reasonsForStopping} />
  //     <MontageDays days={days} />
  //   </div>
  // );
};

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
});

class MontageOutput extends React.Component {
  state = { open: [] };

  handleDayClick = (evt, day) => {
    const { open } = this.state;
    const index = open.indexOf(day.index);

    let newValue = [...open];
    if (index > -1) {
      newValue.splice(index, 1);
    } else {
      newValue.push(day.index);
    }

    this.setState({ open: newValue });
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
            {this.state.open.indexOf(day.index) > -1 ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
          </ListItem>,
          <Collapse
            key={`${day.index}-day-list`}
            in={this.state.open.indexOf(day.index) > -1}
            timeout="auto"
            unmountOnExit>
            <ListItem key={`${day.index}-nav`} className={classes.outerList}>
              <ListItemIcon>
                <NavigationIcon />
              </ListItemIcon>
              <ListItemText inset primary="Navigation" />
            </ListItem>
            <List key={`${day.index}-nav-list`} component="div" disablePadding>
              <ListItem className={classes.innerList}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
            <ListItem key={`${day.index}-enc`} className={classes.outerList}>
              <ListItemIcon>
                <EncounterIcon />
              </ListItemIcon>
              <ListItemText inset primary="Encounters" />
            </ListItem>
            <List key={`${day.index}-enc-list`} component="div" disablePadding>
              <ListItem className={classes.innerList}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
            <ListItem key={`${day.index}-wea`} className={classes.outerList}>
              <ListItemIcon>
                <WeatherIcon />
              </ListItemIcon>
              <ListItemText inset primary="Weather" />
            </ListItem>
            <List key={`${day.index}-wea-list`} component="div" disablePadding>
              <ListItem className={classes.innerList}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        ])}
      </List>
    );
    // return (
    //   <div className={classes.root}>
    //     <List
    //       component="nav"
    //       subheader={
    //         <ListSubheader component="div">Nested List Items</ListSubheader>
    //       }>
    //       <ListItem button>
    //         <ListItemIcon>
    //           <SendIcon />
    //         </ListItemIcon>
    //         <ListItemText inset primary="Sent mail" />
    //       </ListItem>
    //       <ListItem button>
    //         <ListItemIcon>
    //           <DraftsIcon />
    //         </ListItemIcon>
    //         <ListItemText inset primary="Drafts" />
    //       </ListItem>
    //       <ListItem button onClick={this.handleClick}>
    //         <ListItemIcon>
    //           <InboxIcon />
    //         </ListItemIcon>
    //         <ListItemText inset primary="Inbox" />
    //         {this.state.open ? <ExpandLess /> : <ExpandMore />}
    //       </ListItem>
    //       <Collapse in={this.state.open} timeout="auto" unmountOnExit>
    //         <List component="div" disablePadding>
    //           <ListItem button className={classes.nested}>
    //             <ListItemIcon>
    //               <StarBorder />
    //             </ListItemIcon>
    //             <ListItemText inset primary="Starred" />
    //           </ListItem>
    //         </List>
    //       </Collapse>
    //     </List>
    //   </div>
    // );
  }
}

MontageOutput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MontageOutput);
