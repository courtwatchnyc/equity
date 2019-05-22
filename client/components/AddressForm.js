import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButton from './radio-menu-horizontal'

function AddressForm() {
    const duration = ['< 2 min', '2-5 min', '5+ min']
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Case Information
      </Typography>
      <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="date"
                    name="date"
                    label="Date"
                    fullWidth
                    autoComplete="date"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="volunteerName"
                    name="volunteerName"
                    label="Volunteer name"
                    fullWidth
                    autoComplete="vname"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id="borough"
                    name="borough"
                    label="Borough"
                    fullWidth
                    autoComplete="borough"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    id="courtroom"
                    name="courtroom"
                    label="Courtroom"
                    fullWidth
                    autoComplete="courtroom"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="judge"
                    name="judge"
                    label="Judge"
                    fullWidth
                    autoComplete="judge"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField id="ada" name="ada" label="ADA" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="docket"
                    name="docket"
                    label="Docket #"
                    fullWidth
                    autoComplete="docket"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="penalLaw"
                    name="penalLaw"
                    label="Penal Law"
                    fullWidth
                    autoComplete="penal law"
                />
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                    label="Interpreter Needed"
                />
                <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                    //disable if previous is not selected
                    label="Interpreter Present"
                />
                </Grid>
                <RadioButton options={duration}/>
            </Grid>
            </React.Fragment>
  );
}

export default AddressForm;
