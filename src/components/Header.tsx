import * as React from "react"
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
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
    '@global': {
        u1: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: '1px solid ${theme.palette.divider}',
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

const Header = () => {
    const classes=useStyles();

    return(
        <React.Fragment>
            <Container>
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            Chris R
                        </Typography>
                        <nav>
                            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                                About
                            </Link>
                            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                                Contact
                            </Link>
                        </nav>
                        <Button href="#" color="primary" variant="outlined" className={classes.link}>
                            <InstagramIcon />
                        </Button>
                        <Button href="#" color="primary" variant="outlined" className={classes.link}>
                            <TwitterIcon />
                        </Button>
                    </Toolbar>
                </AppBar>
            </Container>
      </React.Fragment>
    )
};

export default Header;