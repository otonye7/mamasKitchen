import React, { useEffect, useContext, useState } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import Search from '../components/search.components';
import {ResturantsContext} from '../../../services/resturants/resturants.context';
import {LocationContext} from '../../../services/location/location.context';
import MapCallOut from '../components/map-callout.component';

const Map = styled(MapView) `
  height: 100%;
  width: 100%;
`;

const MapScreens = () => {
    const { location } = useContext(LocationContext);
  const { resturants = [] } = useContext(ResturantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {resturants.map((resturant) => {
          return (
            <MapView.Marker
              key={resturant.name}
              title={resturant.name}
              coordinate={{
                latitude: resturant.geometry.location.lat,
                longitude: resturant.geometry.location.lng,
              }}
              >
                  <MapView.Callout>
                      <MapCallOut resturant={resturant} />
                  </MapView.Callout>
              </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
}

export default MapScreens