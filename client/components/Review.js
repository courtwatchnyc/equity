import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NativeSelectsWithLogic from './drop-down-menu-logic'

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

//currently in use with the Material Route
const Review = (props) => {
  const gender = ['M', 'F', 'GNC', 'TM', 'TF'];
  const race = ['W', 'B', 'L', 'NA', 'SA', 'EA'];
  const ageGroup = ['16-24', '25-34', '35-44', '45-54', '55+']
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Defendant Information
      </Typography>
      <NativeSelectsWithLogic label='Gender' dropDownOptions={gender} />
      <NativeSelectsWithLogic label='Race' dropDownOptions={race} />
      <NativeSelectsWithLogic label='Age' dropDownOptions={ageGroup} />
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);