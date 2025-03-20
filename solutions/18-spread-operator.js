// BEGIN
const flatten = (coll) => {
    let result = [];

    for (const item of coll) {
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    }

    return result;
};
export {flatten};
// END