import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '900px',
  height: '500px'
};

const center = {
  lat: -12.968866811175245,
  lng: -38.51176952931224
};
const positionMarker = {
  lat: -12.87986261728287,
  lng: -38.47627074438605
}

function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB1RfLZ0T1sqOgVKvp5himiwIJ9B5oc_8g"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center}></Marker>
        <Marker position={positionMarker}></Marker>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Mapa)