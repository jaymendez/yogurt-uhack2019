import React, { Fragment, useState } from "react";
import { InputBase, Paper, IconButton, Switch, Typography } from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  searchBar: {
    padding: "0px 4px",
    marginTop: 4,
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

const SearchBar = props => {
  const classes = useStyles();
  const [searchType, setSearchType] = useState(true);

  const handleChange = (event) => {
    setSearchType(event.target.checked)
  }
  return (
    <Fragment>
      <Paper className={classes.searchBar}>
      <Typography style={{marginLeft: "15px"}} variant="body2" gutterBottom>
        { searchType ? "BUY" : "RENT"}
      </Typography>
      <Switch
          checked={searchType}
          onChange={handleChange}
          value="checked"
        />
        <InputBase
          className={classes.input}
          placeholder="Search your property here"
          inputProps={{ "aria-label": "search" }}
          onChange={props.onChange}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Fragment>
  );
};

export default SearchBar;
