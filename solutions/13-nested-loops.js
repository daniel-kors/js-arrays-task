const _ = require("lodash"); 

// BEGIN
const  getSameCount = (arr1, arr2) => {
    const coll1 = _.uniq(arr1);
    const coll2 = _.uniq(arr2);
    let i = 0;

    for (const item1 of coll1) {
        for (const item2 of coll2) {
            if (item1 === item2) {
                i += 1;
                break;
            }
        }
    }

    return i;
};


export default getSameCount;
// END