
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelectsWithLogic from './drop-down-menu-logic'

const PaymentForm = () => {
    const [additionalCharge, setAdditionalCharge] = useState('a')
    const [open, setOpen] = useState(false)
    const anchorEl = React.useRef(null);
    const charges = ['Not Mentioned', `Couldn't Hear`, 'Assault', 'Burglary']
    const additionalChargeOptions = ['Yes', 'No', 'Not Sure']
    const handleChange = evt => {
        setAdditionalCharge(evt.target.value)
    }
    const handleToggle = () => {
        setOpen(!open)
      };
    const handleClose = evt => {
        if (anchorEl.current.contains(evt.target)) {
          return;
        }
        setOpen(false)
    };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Charge
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <NativeSelectsWithLogic label='Charge' dropDownOptions={charges} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NativeSelectsWithLogic label='Adtl Charges' dropDownOptions={additionalChargeOptions} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Domestic Violence"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Felony"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="6"
          defaultValue="Notes about the charges"
          margin="normal"
          variant="outlined"
          fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;