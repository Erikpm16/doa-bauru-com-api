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


        return () => m.remove();

    }, []);

    return (
        <div ref={mapElement} className="map"></div>
    )
}

// https://api.tomtom.com/search/2/structuredGeocode.json?key=Uj1w4Ss6KVGHqRAKOo27KaCG7IAK1XCe&countryCode=BR&postalCode={postalCode}
// https://api.tomtom.com/search/2/structuredGeocode.json?key=Uj1w4Ss6KVGHqRAKOo27KaCG7IAK1XCe&countryCode=BR&postalCode=17060350&streetNumber=110038

// https://{baseURL}/search/{versionNumber}/structuredGeocode.{ext}?key={Your_API_Key}&countryCode={countryCode}&limit={limit}&ofss={ofss}&streetNumber={streetNumber}&streetName={streetName}&crossStreet={crossStreet}&municipality={municipality}&municipalitySubdivision={municipalitySubdivision}&countryTertiarySubdivision={countryTertiarySubdivision}&countrySecondarySubdivision={countrySecondarySubdivision}&countrySubdivision={countrySubdivision}&postalCode={postalCode}&language={language}&extendedPostalCodesFor={extendedPostalCodesFor}&view={view}&mapcodes={mapcodes}&entityTypeSet={entityTypeSet}

export default Map