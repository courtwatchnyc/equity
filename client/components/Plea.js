import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
  //should this move into a class?
  const daOptions = ["Dismissal", "No offer/rec", "Offer/Rec"];
  const pleaOptionsFromDA = ["Top Charge", "Disorderly", "Unlicensed Driving", "ACD or marijuana ACD", "Other"];
  const sentenceOptionsFromDA = ["Days Jail", "Days Community Service", "Program", "Fine", "Other"];
  const caseResolutionOptions = ["Yes", "No", "Not Sure"];
  return (
    //fix spacing with CSS
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Plea Discussion
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <NativeSelectsWithLogic label='DA Say?' dropDownOptions={daOptions} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <NativeSelectsWithLogic label='Plea' dropDownOptions={pleaOptionsFromDA} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <NativeSelectsWithLogic label='Sentence' dropDownOptions={sentenceOptionsFromDA} />
        </Grid>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="10"
          defaultValue="Notes about the plea discussion"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Typography variant="h6" gutterBottom>
        Plea Discussion
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <NativeSelectsWithLogic label='Case Resolution' dropDownOptions={caseResolutionOptions} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            //disable if previous is not selected
            label="Did the case resolve?"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NativeSelectsWithLogic label='Plea To:' dropDownOptions={pleaOptionsFromDA} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NativeSelectsWithLogic label='Sentence' dropDownOptions={caseResolutionOptions} />
        </Grid>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
          //disable if previous is not selected
          label="Queens: Waive 190.5 Right"
        />
      </Grid>
    </React.Fragment>
  );
}

Plea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Plea);