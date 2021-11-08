const convert = require('./convert.js')

test('12 debería devolver XII', () => {
    expect(convert(12)).toBe('XII');
});

test('16 debería devolver XVI.', () => {
    expect(convert(16)).toBe('XVI');
});

test('29 debería devolver XXIX', () => {
    expect(convert(29)).toBe('XXIX');
});

test('44 debería devolver XLIV', () => {
    expect(convert(44)).toBe('XLIV');
});

test('500 debería devolver D', () => {
    expect(convert(500)).toBe('D');
});

test('798 debería devolver DCCXCVIII', () => {
    expect(convert(798)).toBe('DCCXCVIII');
});