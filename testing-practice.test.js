import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from './testing-practice';

// capitalize function tests
test('capitalize lower case string', () => {
  expect(capitalize('dog')).toBe('Dog');
});
test('capitalize Empty string', () => {
  expect(capitalize('')).toBe('');
});
test('capitalize Uppercase string', () => {
  expect(capitalize('RABBIT')).toBe('Rabbit');
});

// reverse string function tests
test('reverse String', () => {
  expect(reverseString('food')).toBe('doof');
});
test('reverse Empty String', () => {
  expect(reverseString('')).toBe('');
});

// calculator tests
const calculator1 = calculator();
// add function tests
test('calculator add positive numbers', () => {
  expect(calculator1.add(1, 2)).toEqual(3);
});
test('calculator add negative numbers', () => {
  expect(calculator1.add(-8, -2)).toEqual(-10);
});
test('calculator add positive and negative numbers', () => {
  expect(calculator1.add(-8, 2)).toEqual(-6);
});
test('calculator add float numbers', () => {
  expect(calculator1.add(0.1, 2.5)).toBeCloseTo(2.6);
});

// subtract function tests
test('calculator subtract positive numbers', () => {
  expect(calculator1.subtract(5, 2)).toEqual(3);
});
test('calculator subtract negative numbers', () => {
  expect(calculator1.subtract(-8, -2)).toEqual(-6);
});
test('calculator subtract positive and negative numbers', () => {
  expect(calculator1.subtract(-8, 2)).toEqual(-10);
});
test('calculator subtract float numbers', () => {
  expect(calculator1.subtract(5.3, 2.2)).toBeCloseTo(3.1);
});

// multiply function tests
test('calculator multiply positive numbers', () => {
  expect(calculator1.multiply(5, 6)).toEqual(30);
});
test('calculator multiply negative numbers', () => {
  expect(calculator1.multiply(-2, -5)).toEqual(10);
});
test('calculator multiply positive and negative numbers', () => {
  expect(calculator1.multiply(-5, 4)).toEqual(-20);
});
test('calculator multiply float numbers', () => {
  expect(calculator1.multiply(0.1, 2.5)).toBeCloseTo(0.25);
});

// divide function tests
test('calculator divide positive numbers', () => {
  expect(calculator1.divide(1, 2)).toEqual(0.5);
});
test('calculator divide negative numbers', () => {
  expect(calculator1.divide(-8, -2)).toEqual(4);
});
test('calculator divide positive and negative numbers', () => {
  expect(calculator1.divide(16, -2)).toEqual(-8);
});
test('calculator divide float numbers', () => {
  expect(calculator1.divide(0.5, 2)).toBeCloseTo(0.25);
});

// caesarCipher function tests
test('caesarCipher happy path', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});
test('caesarCipher loop after z', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('caesarCipher loop after Z', () => {
  expect(caesarCipher('XYZ', 3)).toBe('ABC');
});
test('caesarCipher keep letter case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
test('caesarCipher keep punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
