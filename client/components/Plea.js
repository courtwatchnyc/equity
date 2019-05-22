import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NativeSelects from './drop-down-menu'
import NativeSelectsWithLogic from './drop-down-menu-logic'
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
      <NativeSelectsWithLogic label='DA Say?' dropDownOptions />
      Plea
      <NativeSelectsWithLogic label='Plea' dropDownOptions />
      Sentence
      <NativeSelectsWithLogic label='Sentence' dropDownOptions />
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
      <NativeSelectsWithLogic label='Case Resolution' dropDownOptions />
      <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                    //disable if previous is not selected
                    label="Did the case resolve?"
                />
        Plea To:
        <NativeSelectsWithLogic label='Plea To:' dropDownOptions />
        Sentence
        <NativeSelectsWithLogic label='Sentence' dropDownOptions />
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