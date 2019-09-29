import React, { Component, Fragment } from "react";
import Map from "../map/map";
import { Container, Grid, Typography, Icon, Paper } from "@material-ui/core";
import Drawer from "./drawer";
import floodmaps from "../../api/floodmaps.json";
import _ from "lodash";
const House = require("../../img/house.png");

export default class index extends Component {
    
    state ={
        floodmapsPoint:[]
    }
    
    componentDidMount(){
        let arr = [];
        _.forEach(floodmaps[1]['layers'], function(value, key) {
            arr.push(value.center);
          });
        this.setState({
            'floodmapsPoint': arr
        });
    }

  render() {
      const { floodmapsPoint } = this.state;
      const { data } = this.props.history.location.state;
      console.log(data);
    return (
      <Fragment>
        <Container maxWidth="lg" style={{ marginTop: "100px" }}>
          <Typography variant="h5" gutterBottom>
            Land For Sale With Clean Title Nearby La Salle Dasmarinas
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Icon>location_on</Icon> Dasmariñas
          </Typography>
          <Grid container justify="center" alignItems="center">
            <Grid item xs>
              <div
                style={{
                  height: "460px",
                  width: "780px",
                  backgroundColor: "blue",
                  margin: "15px"
                }}
              >
                <img src={House} style={{ opacity: 0.8 }}></img>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Drawer />
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} style={{ padding: "15px" }}>
                <Typography variant="h2" gutterBottom>
                    USER DETAILS
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Paper style={{ padding: "15px" }}>
            <Typography variant="h5" gutterBottom>
              Details: <Typography variant="body2">{data.contact_full_name} {data.contact_email}{data.contact_mobileno}</Typography>
            </Typography>

            <hr />
            <Typography variant="h5" gutterBottom>
              Description: <Typography variant="body2">{data.description}</Typography>
            </Typography>
            <hr />
            <Typography variant="h5" gutterBottom>
              Location: <Typography variant="body2">{data.address} {data.barangay} {data.city}</Typography>
            </Typography>
            <Map floodmaps={floodmapsPoint}/>
            <hr />
            <Typography variant="h5" gutterBottom>
              Data Analytics:
            </Typography>
            <hr />
            <Typography variant="h5" gutterBottom>
              Similar Properties:
            </Typography>
            <hr />
          </Paper>
        </Container>
        {/* <h1>ASDASD</h1> */}
      </Fragment>
    );
  }
}
