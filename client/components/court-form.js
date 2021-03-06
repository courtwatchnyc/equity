import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    appBar: {
      position: 'abolute',
    },
    layout: {
      width: 'auto',
      marginTop: 150,
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        marginTop: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 6,
        padding: theme.spacing.unit * 3,
      },
    },
    stepper: {
      padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit,
    },
  });

const CourtForm = props => {
    const { classes } = props
  return (
    <React.Fragment>
    <CssBaseline />
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          CourtWatch Form
        </Typography>
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
                    label="Use this address for payment details"
                />
                </Grid>
            </Grid>
            </React.Fragment>
            </Paper>
        </main>
      </React.Fragment>
  );
}

export const CourtForm2 = withStyles(styles)(CourtForm)