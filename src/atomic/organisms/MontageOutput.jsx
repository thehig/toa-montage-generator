import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import { Day } from '../';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  topline: {
    backgroundColor: theme.palette.background.paper
  },
  outerList: {
    paddingLeft: theme.spacing.unit * 4
  },
  innerList: {
    paddingLeft: theme.spacing.unit * 8
  },
  innermostList: {
    paddingLeft: theme.spacing.unit * 8
  }
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
      montage: { days, completed, reasonsForStopping /* , lost */ }
    } = this.props;

    // console.log("montage", this.props.montage);

    const distance = days.reduce((prev, next) => prev + next.navigation.distance, 0);

    return (
      <List
        component="div"
        subheader={
          <ListSubheader component={Paper} className={classes.topline}>{`${
            days.length
          } days, ${distance} hexes. ${!completed &&
            ' Stopped: [' + reasonsForStopping.join(', ') + ']'}`}</ListSubheader>
        }
      >
        {days.map(day => (
          <Day key={day.index} day={day} />
        ))}
      </List>
    );
  }
}

MontageOutput.propTypes = {
  classes: PropTypes.object.isRequired,
  montage: PropTypes.shape({
    days: PropTypes.array,
    completed: PropTypes.bool,
    reasonsForStopping: PropTypes.array
  })
};

export default withStyles(styles)(MontageOutput);
