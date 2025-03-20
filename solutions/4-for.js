// BEGIN
const addPrefix = (names, prefix) => {
    const result = [];

    for (let i = 0; i < names.length; i++) {
        result.push(`${prefix} ${names[i]}`);
    }
    return result;
};
export default addPrefix;
// END