// BEGIN
const getSuperSeriesWinner = (coll) => {
    let ussrWins = 0;
    let canadaWins = 0;


    for (const [canadaScore, ussrScore] of coll) {
        const result = Math.sign(canadaScore - ussrScore);
        if (result > 0) {
            canadaWins++;
        } else if (result < 0) {
            ussrWins++;
        }
    }

    if (ussrWins > canadaWins) {
        return 'ussr';
    } else if (canadaWins > ussrWins) {
        return 'canada';
    }

    return null;
};


export default getSuperSeriesWinner;
// END