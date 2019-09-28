import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  DrawingManager,
  Marker
} from "@react-google-maps/api";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyAkWxugoc7HVf8pUvA4SEEyNJVHsqAj6MY"
        libraries={["drawing"]}
      >
        <GoogleMap
          id="drawing-manager-example"
          mapContainerStyle={{
            height: "400px",
            width: "800px"
          }}
          zoom={17}
          center={{
            lat: 14.53587,
            lng: 120.9902401
          }}
        >
          <Marker
            position={{
              lat: 14.53587,
              lng: 120.9902401
            }}
          />
          <DrawingManager
            onLoad={drawingManager => {
              console.log(drawingManager);
            }}
            onPolygonComplete={polygon => console.log({ polygon })}
          />
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default SimpleMap;
