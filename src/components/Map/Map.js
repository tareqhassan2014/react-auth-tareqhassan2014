import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '85vh'
};

const position = {
    lat: 22.539142,
    lng: 88.974912
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyBgp-jZRT90FbIKVQRRoI8KhPh3vQ75cOk'
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={16}
            >
                <Marker
                    onLoad={onLoad}
                    position={position}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)