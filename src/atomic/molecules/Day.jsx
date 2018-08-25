import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import TodayIcon from "@material-ui/icons/Today";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { Navigation, Encounters, Weathers } from "../";

class Day extends React.Component {
  state = {
    expanded: false
  };

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  createSummary = () => {
    const { day } = this.props;
    const lost = day.navigation.lost && day.navigation.direction;
    const encounter = day.encounters
      .filter(e => e.encounter)
      .map(e => e.tableRoll.roll);
    const weather = day.weather.filter(w => w.name === "torrent").length > 0;

    const summary = [
      lost && `Lost (${lost})`,
      encounter.length && `Encounter(s) [${encounter.join(", ")}]`,
      weather && "Weather"
    ]
      .filter(e => e)
      .join(", ");

    return summary;
  };

  render() {
    const { /*classes,*/ day } = this.props;

    const { expanded } = this.state;

    return [
      <ListItem key={`${day.index}-day`} button onClick={this.handleClick}>
        <ListItemIcon>
          <TodayIcon />
        </ListItemIcon>
        <ListItemText
          inset
          primary={`Day ${day.index}`}
          secondary={this.createSummary()}
        />
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>,
      <Collapse
        key={`${day.index}-day-list`}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <Navigation {...day.navigation} index={day.index} />
        <Encounters encounters={day.encounters} index={day.index} />
        <Weathers weathers={day.weather} index={day.index} />
      </Collapse>
    ];
  }
}

export default Day;
