// BEGIN
const calculateAverage = (coll) => {
    if (coll.length === 0){
        return null;
    }
    let midSum = 0;
    for (const a of coll) {
        midSum += a;
    }
    return midSum / coll.length;
};

export default calculateAverage;
// END