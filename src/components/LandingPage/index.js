import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core';
import Carousel from '../../utils/materialize/carousel';
import Card from '../../utils/materialize/Card';
import { Link as RouterLink } from "react-router-dom";

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
  state = {
    properties: [
      /* {
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

      } */
      {
        "offer_type": "sell",
        "property_type": "house",
        "title": "3BR Single- Detached House in Better Living",
        "description": "Corner Property located in annex16,18 of BLS.\n3 BR, 2 TB, 2 CG\nMaid's room, single-datached bungalow.\n2 to 3meters space all around the house.\nGated residential community, 24/7 security. Flood free.\nHouse is old & well maintained but may need slight repairs.\nLot area: 267 sq.m / Floor : 160 sq.m\nPrice : 7.5 Million\nPls give 2days advance notice for viewing.\n* Direct buyers only",
        "price": "7500000",
        "show_price": "true",
        "main_image": "1.jpg",
        "video_url": "/vidoes/1.mp4",
        "province": "NCR",
        "city": "Paranaque",
        "barangay": "Don Busco",
        "address": "Saudi Arabia Street Don Bosco, Parañaque",
        "latitude": "14.482492",
        "longitude": "121.024719",
        "contact_full_name": "Christian Tupas",
        "contact_email": "crtupas@gmail.com",
        "contact_mobileno": "0909452761",
        "contact_homeno": "123-1234-123",
        "flood_history": [
          {
            "geoserver_layer": "flood_5:MetroManila_TaguigCity_Flood_5year",
            "coord": {
              "lat": 14.514696,
              "lng": 121.066052
            },
            "lastFlooded": "5-Year"
          },
          {
            "geoserver_layer": "flood_5:MetroManila_Pateros_Flood_5year",
            "coord": {
              "lat": 14.5146970018,
              "lng": 121.066052146
            },
            "lastFlooded": "5-Year"
          },
          {
            "geoserver_layer": "flood_25:MetroManila_TaguigCity_Flood_25year",
            "coord": {
              "lat": 14.514696,
              "lng": 121.066052
            },
            "lastFlooded": "25-Year"
          },
          {
            "geoserver_layer": "flood_25:MetroManila_Pateros_Flood_25year",
            "coord": {
              "lat": 14.5146970018,
              "lng": 121.066052146
            },
            "lastFlooded": "25-Year"
          },
          {
            "geoserver_layer": "flood_100:MetroManila_LasPinasCity_Flood_100year",
            "coord": {
              "lat": 14.4429086935,
              "lng": 120.993871372
            },
            "lastFlooded": "100-Year"
          },
          {
            "geoserver_layer": "flood_100:MetroManila_ParanaqueCity_Flood_100year",
            "coord": {
              "lat": 14.4838537166,
              "lng": 121.014503664
            },
            "lastFlooded": "100-Year"
          },
          {
            "geoserver_layer": "flood_100:MetroManila_PasayCity_Flood_100year",
            "coord": {
              "lat": 14.5292002032,
              "lng": 121.0058587
            },
            "lastFlooded": "100-Year"
          },
          {
            "geoserver_layer": "flood_100:MetroManila_TaguigCity_Flood_100year",
            "coord": {
              "lat": 14.514696,
              "lng": 121.066052
            },
            "lastFlooded": "100-Year"
          },
          {
            "geoserver_layer": "flood_100:MetroManila_Pateros_Flood_100year",
            "coord": {
              "lat": 14.5146970018,
              "lng": 121.066052146
            },
            "lastFlooded": "100-Year"
          }
        ]
      },
      {
        "offer_type": "rent",
        "property_type": "condominium",
        "title": "150 Newport Blvd 1 Bedroom Condo in Newport City Pasay City",
        "description": "Corner Property located in annex16,18 of BLS.\n3 BR, 2 TB, 2 CG\nMaid's room, single-datached bungalow.\n2 to 3meters space all around the house.\nGated residential community, 24/7 security. Flood free.\nHouse is old & well maintained but may need slight repairs.\nLot area: 267 sq.m / Floor : 160 sq.m\nPrice : 7.5 Million\nPls give 2days advance notice for viewing.\n* Direct buyers only",
        "price": "9500000",
        "show_price": "true",
        "main_image": "2.jpg",
        "video_url": "/vidoes/2.mp4",
        "province": "NCR",
        "city": "Pasay",
        "barangay": "Barangay 183, Zone 20",
        "address": "Andrews Ave Pasay, Metro Manila",
        "latitude": "14.522725",
        "longitude": "121.013327",
        "contact_full_name": "Ezekiel David",
        "contact_email": "edavid@gmail.com",
        "contact_mobileno": "0909452761",
        "contact_homeno": "123-1234-123",
        "flood_history": [
          {
            "geoserver_layer": "flood_5:MetroManila_MakatiCity_Flood_5year",
            "coord": {
              "lat": 14.5494314929,
              "lng": 121.033590563
            },
            "lastFlooded": "5-Year"
          },
          {
            "geoserver_layer": "flood_25:MetroManila_MakatiCity_Flood_25year",
            "coord": {
              "lat": 14.5494314929,
              "lng": 121.033590563
            },
            "lastFlooded": "25-Year"
          },
          {
            "geoserver_layer": "flood_100:MetroManila_MakatiCity_Flood_100year",
            "coord": {
              "lat": 14.5494314929,
              "lng": 121.033590563
            },
            "lastFlooded": "100-Year"
          },
          {
            "geoserver_layer": "flood_100:MetroManila_ParanaqueCity_Flood_100year",
            "coord": {
              "lat": 14.4838537166,
              "lng": 121.014503664
            },
            "lastFlooded": "100-Year"
          },
          {
            "geoserver_layer": "flood_100:MetroManila_PasayCity_Flood_100year",
            "coord": {
              "lat": 14.5292002032,
              "lng": 121.0058587
            },
            "lastFlooded": "100-Year"
          }
        ]
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
          <div className={classes.image} style={{ backgroundImage: `url(${Makati})` }}>
            <Container maxWidth="lg">
              <Typography variant="h2" gutterBottom style={{ marginTop: "80px", color: "#ffffff" }}>
                Real Estate with Analytics
            </Typography>
              <Typography variant="h4" gutterBottom style={{ marginTop: "40px", marginLeft: "40px", color: "#ffffff" }}>
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
            {
              this.state.properties.map((data, index) => {
                console.log(data);
                return (

                  <Grid item xs={4} key={index}>
                    <RouterLink
                      to={{
                        pathname: "property",
                        state: {
                          // attributes: this.state.attributes,
                          // project_id: this.state.project_id
                          data: data
                        }
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <Card
                        data={data}
                      />
                    </RouterLink>
                  </Grid>
                )
              })
            }
            {/* 
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid> */}
          </Grid>
        </Container>
      </div>
    )
  }
}


export default withStyles(styles)(LandingPage);