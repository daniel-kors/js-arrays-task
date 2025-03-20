// BEGIN (write your solution here)
const getWeekends = (setting) => {
    const week = ['saturday', 'sunday'];
    const wk = ['sat', 'sun'];

    if (setting === 'short') {
        return wk;
    }

    return week;
};
export { getWeekends };

// END
