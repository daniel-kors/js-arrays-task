// BEGIN
const countUniqChars = (str) => {
    const uniqueChars = [];

    for (let char of str) {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    }

    return uniqueChars.length;
};

export default countUniqChars;
// END