import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NativeSelectsWithLogic from './drop-down-menu-logic'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
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
      <Grid direction="row" container spacing={24}>
      {
        headers.map((val) => {
          return (
            <HeaderComponent item xs={6} sm={3} direction="row" key={val} val={val} />
          )
        })
      }
      <BodyComponent direction="row" val="Bail" />
      <BodyComponent direction="row" val="ROR" />
      <BodyComponent direction="row" val="Remand" />
      <BodyComponent direction="row" val="Supervised Release" />
      <BodyComponent direction="row" val="Order of Protection" />
      </Grid>
    </React.Fragment>
  );
}

const HeaderComponent = props => {
  const {val, direction} = props
  const arr = [0,1,2,3]
  return (
      <>
      {arr.map(idx => {
          if (idx === 0) {
              return (
              <Grid direction={direction} item xs={6} sm={3}>
                <Typography variant="subtitle2" gutterBottom>
                  {val}
                </Typography>
              </Grid>
              )
      }})}
    </>
  )
}

const BodyComponent = props => {
  const {val, direction} = props
  const arr = [0,1,2,3]
  return (
      <>
      {arr.map(idx => {
          if (idx === 0) {
              return (
              <Grid direction={direction} item xs={6} sm={3}>
                <Typography variant="subtitle2" gutterBottom>
                  {val}
                </Typography>
              </Grid>
              )
          }
          return (
            <Grid direction="row" key={idx} item xs={6} sm={3}>
              <NativeSelectsWithLogic
                required
                id="volunteerName"
                name="volunteerName"
                label="Volunteer name"
                autoComplete="vname"
              />
            </Grid>
          )
          }
      ) 
      }
    </>
  )
}

Bail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bail);