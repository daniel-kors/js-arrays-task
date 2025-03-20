// BEGIN
const calculateSum = (coll) => {
    let sum = 0;
    if (coll.length === 0) {
        return 0;
    }
    for (let i = 0; i < coll.length; i++) {
        if (coll[i] % 3 === 0){
            sum += coll[i];
        }
    }
    return sum;
};
export { calculateSum };
// END