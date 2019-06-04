import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NativeSelectsWithLogic from './drop-down-menu-logic';
import Grid from '@material-ui/core/Grid';

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
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <NativeSelectsWithLogic label='Gender' dropDownOptions={gender} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <NativeSelectsWithLogic label='Race' dropDownOptions={race} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <NativeSelectsWithLogic label='Age' dropDownOptions={ageGroup} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);