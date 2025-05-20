import { capitalize, reverseString } from './testing-practice';

test('capitalize lower case string', () => {
  expect(capitalize('dog')).toBe('Dog');
});
test('capitalize Empty string', () => {
  expect(capitalize('')).toBe('');
});
test('capitalize Uppercase string', () => {
  expect(capitalize('RABBIT')).toBe('Rabbit');
});

test('reverse String', () => {
  expect(reverseString('food')).toBe('doof');
});

test('reverse Empty String', () => {
  expect(reverseString('')).toBe('');
});
