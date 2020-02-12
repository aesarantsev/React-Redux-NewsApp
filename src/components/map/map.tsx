import React, { Component } from "react";
import ReactMapboxGl, { Popup } from "react-mapbox-gl";

const MapboxMap = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYW5kcnJyOTYiLCJhIjoiY2s2aW81bTR6MDM0azNybnQwd2t3ZHhybyJ9.sOZgiiOJ5ai23hEZcCSczw"
});

class Map extends Component {
  render() {
    return (
      <MapboxMap
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "70vh",
          width: "40vw"
        }}
        center={[135.067192, 48.468523]}
        zoom={[15]}
      >
        <Popup coordinates={[135.067192, 48.468523]}>
          <h1>Fogstream</h1>
        </Popup>
      </MapboxMap>
    );
  }
}

export default Map;
