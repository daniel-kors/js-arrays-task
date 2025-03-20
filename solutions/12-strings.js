// BEGIN
const makeCensored = (text, errWords) => {
    const words = text.split(' ');
    const censoredWords = [];

    for (const word of words) {
        if (errWords.includes(word)) {
            censoredWords.push('$#%!');
        } else {
            censoredWords.push(word);
        }
    }

    return censoredWords.join(' ');
}


export default makeCensored;

// END