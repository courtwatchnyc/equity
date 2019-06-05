import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
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

//not in use for /material route
function Bail(props) {
  const { classes } = props;
  const headers = ["", "Prosecution", "Defense", "Judge"]
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Bail Information
      </Typography>
      <Grid container spacing={24}>
      {
        headers.map((val) => {
          return (
            <HeaderComponent key={val} val={val} />
          )
        })
      }
      </Grid>
      <HeaderComponent val="Bail" />
      <HeaderComponent val="ROR" />
      <HeaderComponent val="Remand" />
      <HeaderComponent val="Supervised Release" />
      <HeaderComponent val="Order of Protection" />
    </React.Fragment>
  );
}

const HeaderComponent = props => {
  const {val} = props
  return (
    <Grid container spacing={24}>
      <Grid item xs={6} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
          {val}
        </Typography>
      </Grid>
      {(()=>{
        for (let i = 0; i < 3; i++) {
          return (
            <Grid item xs={6} sm={3}>
              <NativeSelectsWithLogic
                required
                id="volunteerName"
                name="volunteerName"
                label="Volunteer name"
                autoComplete="vname"
              />
            </Grid>
          )}
      })()}
    </Grid>
  )
}

Bail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bail);