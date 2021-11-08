
function convert(num) {
    var c = [
        ['', "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ['', "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ['', "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ['', "M", "MM", "MMM"]
    ];
    // JavaScript% / El cálculo tiene decimales, debe usar Math.floor para redondear hacia abajo
    return c[3][Math.floor(num / 1000 % 10)] + c[2][Math.floor(num / 100 % 10)] + c[1][Math.floor(num / 10 % 10)] + c[0][Math.floor(num % 10)];
}

convert(36);

module.exports = convert;
