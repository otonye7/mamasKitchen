import {mocks} from './mock';
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

resturantsRequest().then((result) => {
        console.log(camelze(result))
}).catch((err) => {
    console.log(err)
})