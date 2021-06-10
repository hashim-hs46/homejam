import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as Cart } from '../assets/icons/Cart.svg'
import { ReactComponent as Search } from '../assets/icons/Search.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navlink: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} color="transparent" position="static">
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <div>
              <img alt="brandjam" src='/images/Logo.png' />
            </div>
            <div className={classes.navlink}>
              <Button style={{ textTransform: 'unset' }} color="inherit" startIcon={<Search />}>Search</Button>
              <Button style={{ textTransform: 'unset' }} color="inherit">Help</Button>
              <Button style={{ textTransform: 'unset' }} color="inherit">Account</Button>
              <IconButton color="inherit"><Cart /></IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
