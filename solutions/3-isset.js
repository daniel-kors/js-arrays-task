// BEGIN
const get = (arr, index, base = null) => {
    if (index < 0 || index >= arr.length) {
        return base;
    }
    return arr[index];
};
export {get};
// END