import * as React from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from '../components/Header';
import ArtFeed from '../components/ArtFeed';
import Footer from '../components/Footer';


const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="melincon.com">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const IndexPage = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
        <Header />
        <main>
          <ArtFeed />
        </main>
        <Footer />
      </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default IndexPage;
