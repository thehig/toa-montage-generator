import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/List/ListSubheader';
import Typography from '@material-ui/core/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/List';
import Collapse from '@material-ui/core/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

import Chip from '@material-ui/core/Chip';
import NavigationIcon from 'material-ui-icons/Map';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
  outerList: {
    paddingLeft: theme.spacing.unit * 4,
  },
  innerList: {
    paddingLeft: theme.spacing.unit * 8,
  },
});

class Navigation extends React.Component {
  state = {
    expanded: false,
  };

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const {
      classes,
      rolls,
      startedLost,
      pace,
      speed,
      paceMod,
      success,
      lost,
      direction,
      distance,
      index,
      becameLost,
      stillLost,
      becameFound,
    } = this.props;
    const { expanded } = this.state;
    return [
      <ListItem
        key={`${index}-nav`}
        className={classes.outerList}
        button
        onClick={this.handleClick}>
        <ListItemIcon>
          <NavigationIcon />
        </ListItemIcon>
        <ListItemText
          inset
          primary={`Navigation (DC${rolls[0].options.versus})`}
          secondary={`${becameLost ? 'Became Lost (' + direction + ')' : ''}${
            stillLost ? 'Lost (' + direction + ')' : ''
          }${becameFound ? 'Became Found' : ''}`}
        />
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>,
      <Collapse
        key={`${index}-nav-list`}
        in={expanded}
        timeout="auto"
        unmountOnExit>
        {/* NAVIGATION */}
        {rolls.map((roll, mapIndex) => (
          <ListItem
            key={`${index}-nav-list-roll-${mapIndex}`}
            className={classes.innerList}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              inset
              disableTypography
              primary={
                <Typography variant="subheading">{`${roll.options.name} (d${
                  roll.sides
                }=${roll.roll})${roll.success ? ': Ok' : ''}`}</Typography>
              }
              secondary={
                <div>
                  {roll.options.advantage && (
                    <Chip label={`Advantage [${roll.rolls.join(',')}]`} />
                  )}
                  {roll.options.disadvantage && (
                    <Chip label={`Disadvantage [${roll.rolls.join(',')}]`} />
                  )}
                  {roll.options.modifier && (
                    <Chip label={`Modifier ${roll.options.modifier}`} />
                  )}
                </div>
              }
            />
          </ListItem>
        ))}
      </Collapse>,
    ];
  }
}

Navigation.propTypes = {
  rolls: PropTypes.arrayOf(
    PropTypes.shape({
      rolls: PropTypes.array.isRequired,
      roll: PropTypes.number.isRequired,
      success: PropTypes.bool,
      options: PropTypes.shape({
        advantage: PropTypes.bool,
        disadvantage: PropTypes.bool,
        name: PropTypes.string,
        versus: PropTypes.number,
      }),
    })
  ),
  startedLost: PropTypes.bool,
  pace: PropTypes.string,
  speed: PropTypes.string,
  paceMod: PropTypes.number,
  success: PropTypes.bool,
  lost: PropTypes.bool,
  distance: PropTypes.number,
  becameLost: PropTypes.bool,
  stillLost: PropTypes.bool,
  becameFound: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

Navigation.defaultProps = {
  startedLost: false,
  speed: 'walk',
  paceMod: 0,
  success: false,
  lost: false,
  distance: 0,
  becameLost: false,
  stillLost: false,
  becameFound: false,
};

export default withStyles(styles)(Navigation);
