// BEGIN
const getMax = (numbers) => {
    if (numbers.length === 0) {
        return null;
    }

    const [first, ...rest] = numbers;
    let max = first;

    for (const num of rest) {
        if (num > max) {
            max = num;
        }
    }

    return max;
};

export { getMax };
// END