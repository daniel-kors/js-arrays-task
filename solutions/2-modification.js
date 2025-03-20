// BEGIN
const swap = (coll) => {
    if (coll.length < 2) {
        return coll;
    }

    let first = coll[0];
    let last = coll[coll.length - 1];

    coll[0] = last;
    coll[coll.length - 1] = first;

    return coll;
};
export { swap };
// END