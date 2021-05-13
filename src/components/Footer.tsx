import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingbottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme. spacing(6),
        },
    },
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          melincon.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Box mt={5} className={classes.footer}>
                <Copyright />
            </Box>
        </React.Fragment>
    )
};

export default Footer;