import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core';
import Carousel from '../../utils/materialize/carousel';
import Card from '../../utils/materialize/Card';
const Makati = require("../../img/makati2.jpg");

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  image: {
    // backgroundImage: 'url("../../img/makati2.jpg")',
    backgroundImage: `url(${Makati})`,
    opacity: 0.8,
    width: "100vw",
    height: "500px",
    backgroundSize: "cover",
  }
});

const style = {
  imageSample: {
    backgroundImage: `url(${Makati})`
  }
}
class LandingPage extends Component {
  state: {
    properties: [
      {
        offer_type: "", //sell & rent
        property_type: "", // condominium, apartment, house, land
        title: "", // 2 Bedroom apartment with seaview, 2000 sqm land beachside
        description: "",
        price: "", 
        show_price: "", //booealn
        main_image: "",
        video_url: "",
        province: "",
        city: "",
        barangay: "",
        address: "",
        latitude: "",
        longitude: "",
        contact_full_name: "",
        contact_email: "",
        contact_mobileno: "",
        contact_homeno: "",

      }
    ]

  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Carousel /> */}
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
        <div className={classes.image} style={{backgroundImage: `url(${Makati})`}}>
          <Container maxWidth="lg">
            <Typography variant="h2" gutterBottom style={{marginTop: "80px", color: "#ffffff"}}>
              Real Estate with Analytics
            </Typography>
            <Typography variant="h4" gutterBottom style={{marginTop: "40px", marginLeft: "40px",  color: "#ffffff"}}>
            "A data driven approach to investment in real estate"
            </Typography>
            
          </Container>
        </div>
        {/* <img src={Makati} style={{ opacity: 0.8}}></img>  */}

        </Grid>
        <br />

        <Container maxWidth="lg">
          {/* <h1>Test</h1> */}
          <Grid container className={classes.root} spacing={10}>
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}


export default withStyles(styles)(LandingPage);