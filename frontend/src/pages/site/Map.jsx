import React, { useEffect, useState, useRef } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'

const Map = () => {
    const mapElement = useRef()
    const [map, setMap] = useState()

    useEffect(() => {
        let m = tt.map({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            container: mapElement.current,
        })

        console.log("MAP");
        setMap(m)

    }, []);

    return (
        <div ref={mapElement} className="map"></div>
    )
}


export default Map