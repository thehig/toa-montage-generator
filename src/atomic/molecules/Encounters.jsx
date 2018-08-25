import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import EncounterIcon from '@material-ui/icons/Colorize';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  outerList: {
    paddingLeft: theme.spacing.unit * 4
  },
  innermostList: {
    paddingLeft: theme.spacing.unit * 8
  }
});

class Encounters extends React.Component {
  state = {
    expanded: false
  };

  constructor(props) {
    super(props);

    if (props && props.encounters) {
      const actualEncounters = props.encounters.filter(any => any.hasOwnProperty('tableRoll'));
      this.state.expanded = actualEncounters.length > 0;
    }
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, encounters, index } = this.props;
    const { expanded } = this.state;

    return [
      <ListItem
        key={`${index}-enc`}
        className={classes.outerList}
        button
        onClick={this.handleClick}
      >
        <ListItemIcon>
          <EncounterIcon />
        </ListItemIcon>
        <ListItemText
          inset
          primary={`Encounters (DC${encounters[0].encounterRoll.options.versus})`}
        />
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>,
      <Collapse key={`${index}-enc-list`} in={expanded} timeout="auto" unmountOnExit>
        {/* ENCOUNTERS */}
        {encounters.map((encounter, index) => (
          <ListItem key={`${index}-enc-${index}-list`} className={classes.innermostList}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              inset
              primary={`(d${encounter.encounterRoll.sides}=${encounter.encounterRoll.roll}): ${
                encounter.encounter ? 'Encounter!' : 'None'
              }`}
              secondary={encounter.encounter !== false && `Encounter table #${encounter.encounter}`}
            />
          </ListItem>
        ))}
      </Collapse>
    ];
  }
}

Encounters.propTypes = {
  encounters: PropTypes.arrayOf(
    PropTypes.shape({
      encounterRoll: PropTypes.shape({
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
      tableRoll: PropTypes.shape({
        rolls: PropTypes.array.isRequired,
        roll: PropTypes.number.isRequired,
        success: PropTypes.bool,
        options: PropTypes.shape({
          advantage: PropTypes.bool,
          disadvantage: PropTypes.bool,
          name: PropTypes.string,
          versus: PropTypes.number
        })
      })
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Encounters);
