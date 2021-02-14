module.exports = function reverse(n) {
    if (n > 0) {
        let str = String(n)
        return str.split('').reverse().join('');
    } else {
        let str = '' + n;
        let arr = str.split('');
        arr.splice(0, 1);
        return arr.reverse().join('');
    };
};
