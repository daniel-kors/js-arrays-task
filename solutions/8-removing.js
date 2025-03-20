// BEGIN
const getSameParity = (coll) => {
    const result = [];
    if (coll.length === 0){
        return result;
    }
    for (const value of coll) {
        if (coll[0] % 2 === 0) {
            if (value % 2 === 0) {
                result.push(value);
            }
        } else {
            if ( value % 2 !== 0 ) {
                result.push(value);
            }
        }
    }
    return result;
};
export default getSameParity;
// END