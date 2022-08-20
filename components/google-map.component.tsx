import React, {ReactElement, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {getForecast} from '../utils/weather-api.utils';

export default function GoogleMap({coords}: { coords: { lat: number; lng: number } }) {
    const [point, setPoint] = useState([45, 55]);
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

    const _onClick = async ({
                          x,
                          y,
                          lat,
                          lng,
                          event
                      }: { x: number, y: number, lat: number, lng: number, event: any }) => {
        console.log(await getForecast([lat, lng]));
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
                    onClick={_onClick}
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
                    <AnyReactComponent text='asd' lat={point[0]} lng={point[1]}/>
                </GoogleMapReact>
            </div>
            <div>
                dede
            </div>
        </>
    )
}