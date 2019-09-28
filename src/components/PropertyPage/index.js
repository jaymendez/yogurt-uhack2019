import React, { Component, Fragment } from 'react'
import Map from "../map/map";
import { Container, Grid, Typography, Icon, Paper } from '@material-ui/core';


export default class index extends Component {
    render() {
        return (
            <Fragment>
                <Container maxWidth="lg" style={{marginTop: "100px"}}>
                    <Typography variant="h5" gutterBottom>
                        Land For Sale With Clean Title Nearby La Salle Dasmarinas
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Icon>location_on</Icon> Dasmariñas
                    </Typography>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs>
                            <div style={{height: "400px", width: "800px", backgroundColor:"blue", margin: "15px"}} >
                                HEYO
                            </div>
                        </Grid>
                        <Grid item xs >
                            <Paper elevation={1} style={{padding: "15px"}}>
                            <Typography variant="h5" gutterBottom>
                                User Details:
                            </Typography>
                            </Paper>

                        </Grid>
                    </Grid>
                    <Paper style={{padding: "15px"}}>
                        <Typography variant="h5" gutterBottom>
                            Details:
                        </Typography>
                        
                        <hr/>
                        <Typography variant="h5" gutterBottom>
                            Description:
                        </Typography>
                        <hr/>
                        <Typography variant="h5" gutterBottom>
                            Location:
                        </Typography>
                        <Map/>
                        <hr/>
                        <Typography variant="h5" gutterBottom>
                            Similar Properties: 
                        </Typography>
                        <hr/>
                    </Paper>
                </Container>
                {/* <h1>ASDASD</h1> */}
            </Fragment>
        )
    }
}
