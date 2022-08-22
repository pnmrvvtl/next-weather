import React, {ReactElement, useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {useGetForecastQuery} from "../redux/slices/weather.slice";
import {skipToken} from "@reduxjs/toolkit/query";
import {ForecastQueryOptions} from "../types/query-options.type";

export default function GoogleMap({coords}: { coords: { lat: number; lng: number } }) {
    const [point, setPoint] = useState([45, 55])

    const [myState, setState] = useState<ForecastQueryOptions>({
        location: 'London',
        days: 2,
        aqi: 'no',
        alerts: 'no'
    }) // initialize with skipToken to skip at first
    const result = useGetForecastQuery(myState);


    const style = {
        width: '450px',
        height: '450px'
    };

    const AnyReactComponent = ({text, lat, lng} : {text:string, lat:number, lng:number}): ReactElement => {
        return (
            <>
                {`${text}  ${lat}  ${lng}`}
            </>
        )
    }

    const onMapClick = ({
                          x,
                          y,
                          lat,
                          lng,
                          event
                      }: { x: number, y: number, lat: number, lng: number, event: any }) => {
        setState({
            location: `${lat},${lng}`,
            days: 2,
            aqi: 'no',
            alerts: 'no'
        });
        console.log(result);
        setPoint([lat, lng]);
    }
    return (
        <>
            <div style={style}>
                <GoogleMapReact
                    options={{
                        panControl: false,
                        mapTypeControl: true,
                        scrollwheel: true,
                    }}
                    onClick={onMapClick}
                    bootstrapURLKeys={{
                        key: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY!,
                        language: 'ua',
                        region: 'ua',
                    }}
                    layerTypes={['TrafficLayer', 'TransitLayer']}
                    defaultCenter={coords}
                    center={coords}
                    defaultZoom={1}
                    margin={[0, 0, 0, 0]}
                >
                    <AnyReactComponent text='Marker' lat={point[0]} lng={point[1]}/>
                </GoogleMapReact>
            </div>
            <div>
                Google Map
            </div>
        </>
    )
}