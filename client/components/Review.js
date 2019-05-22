import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NativeSelects from './drop-down-menu'

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

function Review(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Defendant Information
      </Typography>
      <NativeSelects />
      <NativeSelects />
      <NativeSelects />
      <NativeSelects />
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);