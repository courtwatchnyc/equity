import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NativeSelects from './drop-down-menu'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

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

function Plea(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Plea Discussion
      </Typography>
      DA Say?
      <NativeSelects />
      Plea
      <NativeSelects />
      Sentence
      <NativeSelects />
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows="10"
        defaultValue="Notes about the plea discussion"
        margin="normal"
        variant="outlined"
      />

      Case Resolution
      <NativeSelects />
      <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                    //disable if previous is not selected
                    label="Did the case resolve?"
                />
        Plea
      <NativeSelects />
      Sentence
      <NativeSelects />
      <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                    //disable if previous is not selected
                    label="Queens: Waive 190.5 Right"
                />
    </React.Fragment>
  );
}

Plea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Plea);