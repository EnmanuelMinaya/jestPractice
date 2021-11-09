
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número decimal ", function (num) {
    const romano = convert(num);
    console.log(`el numero romano es ${romano}`)
    rl.close();
});

rl.on("close", function () {
    console.log("\nBYE");
    process.exit(0);
});

function convert(num) {
    var c = [
        ['', "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ['', "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ['', "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ['', "M", "MM", "MMM"]
    ];
    return c[3][Math.floor(num / 1000 % 10)] + c[2][Math.floor(num / 100 % 10)] + c[1][Math.floor(num / 10 % 10)] + c[0][Math.floor(num % 10)];
}


module.exports = convert;
