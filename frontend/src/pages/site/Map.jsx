import React, { useEffect, useState, useRef } from 'react'
import "../../assets/styles/Mapa.css"
import * as tt from '@tomtom-international/web-sdk-maps'

const Map = () => {
    const mapElement = useRef()
    const [map, setMap] = useState()

    useEffect(() => {
        let m = tt.map({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            container: mapElement.current,
            zoom: 15,
            center: [-49.03502, -22.33638]
        })

        console.log("MAP");
        setMap(m)

        return () => m.remove();

    }, []);

    useEffect(() => {
        fetch("http://localhost:2000/clients")
            .then((response) => response.json())
            .then((data) => {
                let maiorLat = null;
                let menorLat = null;

                let maiorLon = null;
                let menorLon = null;

                data.forEach(instituicao => {
                    if (maiorLat == null || instituicao.lat > maiorLat) maiorLat = instituicao.lat;
                    if (menorLat == null || instituicao.lat < menorLat) menorLat = instituicao.lat;

                    if (maiorLon == null || instituicao.lon > maiorLon) maiorLon = instituicao.lon;
                    if (menorLon == null || instituicao.lon < menorLon) menorLon = instituicao.lon;

                    var marker = new tt.Marker().setLngLat([instituicao.lon, instituicao.lat]).addTo(map);
                })

                map.fitBounds([[menorLon, menorLat], [maiorLon, maiorLat]], {
                    padding: { top: 100, bottom:100, left: 100, right: 100 }
                });
            });
    }, [map])

    return (
        <div className="map-container">
            <div ref={mapElement} className="map"></div>
        </div>
    )
}

// https://api.tomtom.com/search/2/structuredGeocode.json?key=Uj1w4Ss6KVGHqRAKOo27KaCG7IAK1XCe&countryCode=BR&postalCode={postalCode}
// https://api.tomtom.com/search/2/structuredGeocode.json?key=Uj1w4Ss6KVGHqRAKOo27KaCG7IAK1XCe&countryCode=BR&postalCode=17060350&streetNumber=110038

// https://{baseURL}/search/{versionNumber}/structuredGeocode.{ext}?key={Your_API_Key}&countryCode={countryCode}&limit={limit}&ofss={ofss}&streetNumber={streetNumber}&streetName={streetName}&crossStreet={crossStreet}&municipality={municipality}&municipalitySubdivision={municipalitySubdivision}&countryTertiarySubdivision={countryTertiarySubdivision}&countrySecondarySubdivision={countrySecondarySubdivision}&countrySubdivision={countrySubdivision}&postalCode={postalCode}&language={language}&extendedPostalCodesFor={extendedPostalCodesFor}&view={view}&mapcodes={mapcodes}&entityTypeSet={entityTypeSet}

export default Map