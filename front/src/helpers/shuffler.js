const shuffler = array => {
    const len = array.length
    for (let i = 0; i < len; i++) {
        const rando = i + Math.floor(Math.random()*(len-i));
        array.unshift(array.splice(rando, 1)[0]);
    }
    return array;
}

export default shuffler