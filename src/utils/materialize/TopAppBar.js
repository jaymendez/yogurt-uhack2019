import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Icon,
  Grid,
  TextField,
  InputBase,
  Paper,
  IconButton,
  Divider
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import SearchBar from "./Searchbar";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const styles = () => ({
  root: {
    flexGrow: 1
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  searchBar: {
    padding: "0px 4px",
    marginTop: 4,
    display: "flex",
    alignItems: "center",
    width: 400
  },
  grow: {
    flexGrow: 1
    // backgroundColor: theme.palette.common.white
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logoutButton: {
    marginTop: 10,
    float: "right"
  }
});

const NavBar = props => {
  const { classes, text } = props;

  const searchBar = <SearchBar onChange={props.searchBar} />;
  return (
    <div className={classes.root}>
    <StickyHeader header={

      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={4}>
              <Typography
                align="left"
                variant="subheading"
                color="inherit"
                className={classes.grow}
              >
                <p>{text} </p>
              </Typography>
            </Grid>
            <Grid item xs>
              {/* <SearchBar /> */}
              {searchBar}
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.logoutButton}
              >
                <Icon>exit_to_app</Icon>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    } />
    </div>
  );
};

// NavBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(NavBar);
