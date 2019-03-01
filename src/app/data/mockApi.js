import sampleData from './sampleData'


const delay = (ms) => {
    return new Promise( resolve => setTimeout(resolve,ms)); // returns a new promise which in this case is just delay
}

export const fetchSampleData = () => {
    return delay(2000).then( () => {
        return Promise.resolve(sampleData);
    })
}

/**setTimeout(() => {
    
}, timeout); could also use this insted of above settimeout */

