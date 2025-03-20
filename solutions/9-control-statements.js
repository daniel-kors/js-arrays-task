// BEGIN
const getTotalAmount = (money, currency) => {
    let result = 0;
    for (let i = 0; i < money.length; i++) {
        const item = money[i];
        if (item.slice(0, 3) === currency) {
            result += Number(item.slice(4));
        }
    }
    return result;
};

export default getTotalAmount;
// END