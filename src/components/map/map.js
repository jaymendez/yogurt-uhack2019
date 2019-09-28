import React, { Component } from "react";
import { GoogleMap, LoadScript, Polygon, Marker, InfoWindow} from "@react-google-maps/api";
import _ from "lodash";

const gkey = "AIzaSyCyvVSCRq0_gLLXBQvdWFUfQGcQ4Sn9sJk";
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    let { location, geofence } = this.props;
    if (_.isEmpty(location) && _.isEmpty(geofence)) {
      location = { lat: 24.886, lng: -70.268 };
      geofence = [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 25.774, lng: -80.19 }
      ];
    }
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={gkey}
        libraries={["drawing"]}
      >
        <GoogleMap
          id="marker-example"
          mapContainerStyle={{
            height: "400px",
            width: "800px"
          }}
          zoom={5}
          center={location}
        >
          <Marker position={location} />

          <Polygon
            onLoad={polygon => {
              console.log("polygon: ", polygon);
            }}
            paths={geofence}
            options={{
              strokeColor: "red",
              strokeOpacity: 1,
              strokeWeight: 1,
              clickable: false,
              draggable: false,
              editable: false,
              geodesic: false,
              zIndex: 1
            }}
          />

            <InfoWindow
                onLoad={infoWindow => {
                  console.log('infoWindow: ', infoWindow)
                }}
                position={{
                  lat: 14.53587,
                  lng: 120.9902401
                }}
              >
                <div>
                  <h1>InfoWindow</h1>
                </div>
              </InfoWindow>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default SimpleMap;
