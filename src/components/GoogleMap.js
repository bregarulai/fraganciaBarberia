import React from "react"
import GoogleMapReact from "google-map-react"

const isClient = typeof (window !== "undefined")

const GoogleMap = () => {
  const lat = "28.44287"
  const lng = "-81.40194"

  return (
    <section className="google-map">
      <div className="map">
        {isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GATSBY_GOOGLE_MAPS_STATIC_API_KEY,
            }}
            defaultCenter={[lat, lng]}
            defaultZoom={14}
          >
            <div className="marker" lat={lat} lng={lng}></div>
          </GoogleMapReact>
        )}
      </div>
    </section>
  )
}

export default GoogleMap
