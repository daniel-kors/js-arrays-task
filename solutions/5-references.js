// BEGIN
const reverse = (coll) => {
    const length = coll.length;
    let left = 0;
    let right = length - 1;

    while (left < right) {
        const temp = coll[left];
        coll[left] = coll[right];
        coll[right] = temp;
        left++;
        right--;
    }
}
export { reverse };
// END