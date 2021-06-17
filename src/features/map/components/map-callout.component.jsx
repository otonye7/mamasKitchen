import React from 'react';
import CompactResturantInfo from '../../../components/resturants/compact-resturant-info.component';

const MapCallOut = ({resturant}) => {
    return (
        <CompactResturantInfo isMap resturant={resturant} />
    )
}

export default MapCallOut;