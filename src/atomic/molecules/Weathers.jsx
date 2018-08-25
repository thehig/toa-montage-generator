import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';

import WeatherIcon from '@material-ui/icons/WbSunny';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  outerList: {
    paddingLeft: theme.spacing.unit * 4
  },
  innermostList: {
    paddingLeft: theme.spacing.unit * 8
  }
});

class Weathers extends React.Component {
  state = {
    expanded: false
  };

  constructor(props) {
    super(props);

    if (props && props.weathers) {
      const torrentialWeather = props.weathers.filter(
        any => any.hasOwnProperty('name') && any.name === 'torrent'
      );
      this.state.expanded = torrentialWeather.length > 0;
    }
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, weathers, index } = this.props;
    const { expanded } = this.state;

    return [
      <ListItem
        key={`${index}-wea`}
        className={classes.outerList}
        button
        onClick={this.handleClick}
      >
        <ListItemIcon>
          <WeatherIcon />
        </ListItemIcon>
        <ListItemText inset primary="Weather" />
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>,
      <Collapse key={`${index}-wea-list`} in={expanded} timeout="auto" unmountOnExit>
        {/* WEATHER */}
        {weathers.map((weather, index) => (
          <ListItem key={`${index}-enc-${index}-list`} className={classes.innermostList}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              inset
              primary={`(d${weather.weatherRoll.sides}=${weather.weatherRoll.roll}): ${
                weather.effect.name
              }`}
              secondary={`${weather.effect.effects}`}
            />
          </ListItem>
        ))}
      </Collapse>
    ];
  }
}

Weathers.propTypes = {
  weathers: PropTypes.arrayOf(
    PropTypes.shape({
      weatherRoll: PropTypes.shape({
        rolls: PropTypes.array.isRequired,
        roll: PropTypes.number.isRequired,
        success: PropTypes.bool,
        options: PropTypes.shape({
          advantage: PropTypes.bool,
          disadvantage: PropTypes.bool,
          name: PropTypes.string,
          versus: PropTypes.number
        })
      }).isRequired,
      name: PropTypes.string,
      effect: PropTypes.shape({
        name: PropTypes.string.isRequired,
        effects: PropTypes.string
      }).isRequired
    })
  ).isRequired,
  index: PropTypes.number.isRequired
};

export default withStyles(styles)(Weathers);
