const { add, sub } = require('../src/calculator.js');

describe('Calculator Functionality', () => {
    // Tests for addition
    describe('Addition', () => {
        test('adds 2 and 3 correctly', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('adds negative numbers correctly', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        test('adds a positive and a negative number correctly', () => {
            expect(add(10, -5)).toBe(5);
        });
    });

    // Tests for subtraction
    describe('Subtraction', () => {
        test('subtracts 5 from 10 correctly', () => {
            expect(sub(10, 5)).toBe(5);
        });

        test('handles negative results', () => {
            expect(sub(5, 10)).toBe(-5);
        });

        test('subtracts a negative number correctly', () => {
            expect(sub(10, -5)).toBe(15);
        });
    });
});