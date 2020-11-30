import React from "react"
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps"

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 28.44287, lng: -81.4019 }}
    >
      <Marker position={{ lat: 28.44287, lng: -81.4019 }} />
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export { Map, WrappedMap }
