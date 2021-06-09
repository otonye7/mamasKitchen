import {mocks, mockImages} from './mock';
import camelize from 'camelize';

export const resturantsRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) {
            reject("Not Found")
        }
        resolve(mock)
    })
}

export const resturantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((resturant) => {
        resturant.photos = resturant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        });
        return {
            ...resturant,
            isClosedTemporarily: resturant.business_status === "CLOSED_TEMPORARILY",
            isOpenNow: resturant.opening_hours && resturant.opening_hours.open_now
        }
    })
    return camelize(mappedResults)
}
