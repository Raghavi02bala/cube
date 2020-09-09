import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Component.css';


function Copyright() {
    return (
        <div variant="body2" color="white" align="center">
        </div>
    );
}

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        //   '& .MuiInput-underline:after': {
        //     borderBottomColor: 'red',                 not making any big diff
        //   },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(TextField);

const cssStyles = makeStyles((theme) => ({
    root: {
        background: "black"
    },
    input: {
        color: "white"
    },
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#f0791f",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));


export default function login() {
    const classes = cssStyles();
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className="signup">
                    Log In
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CssTextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                className={classes.root}
                                InputProps={{
                                    className: classes.input
                                }}
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CssTextField
                                className="text"
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                className={classes.root}
                                InputProps={{
                                    className: classes.input
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                    <Link to="main">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="#ff5c5c"
                            className={classes.submit}
                        >
                            login
                    </Button>
                    </Link>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="signup" className="signlink">
                                Don't have an account? Sign Up
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}