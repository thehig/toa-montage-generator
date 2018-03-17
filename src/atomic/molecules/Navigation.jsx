import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

import Chip from 'material-ui/Chip';
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
      distance,
      index,
    } = this.props;
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
                {rolls[0].options.advantage && <Chip label="Advantage" />}
                {rolls[0].options.disadvantage && <Chip label="Disadvantage" />}
                {rolls[0].options.modifier && (
                  <Chip label={`Modifier ${rolls[0].options.modifier}`} />
                )}
              </span>
            }
          />
        </ListItem>
      </List>,
    ];
  }
}

export default withStyles(styles)(Navigation);
