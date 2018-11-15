const libs = require('../src/libs');
describe('absolute', () => {
    it('return positive number if number is 1', () => {
        const number = 1;
        const result = libs.absolute(number);
        expect(result).toBe(1);
    });
    it('return positive number if number is 2', () => {
        const number = 2;
        const result = libs.absolute(number);
        expect(result).toBe(2);
    });
    it('return positive number if number is 3', () => {
        const number = 3;
        const result = libs.absolute(number);
        expect(result).toBe("Fizz");
    });
    it('return positive number if number is 4', () => {
        const number = 4;
        const result = libs.absolute(number);
        expect(result).toBe(4);
    });
    it('return positive number if number is 5', () => {
        const number = 5;
        const result = libs.absolute(number);
        expect(result).toBe("Buzz");
    });
    it('return positive number if number is 6', () => {
        const number = 6;
        const result = libs.absolute(number);
        expect(result).toBe("Fizz");
    });
    it('return positive number if number is 7', () => {
        const number = 7;
        const result = libs.absolute(number);
        expect(result).toBe(7);
    });
    it('return positive number if number is 8', () => {
        const number = 8;
        const result = libs.absolute(number);
        expect(result).toBe(8);
    });
    it('return positive number if number is 9', () => {
        const number = 9;
        const result = libs.absolute(number);
        expect(result).toBe("Fizz");
    });
    it('return positive number if number is 10', () => {
        const number = 10;
        const result = libs.absolute(number);
        expect(result).toBe("Buzz");
    });
    it('return positive number if number is 11', () => {
        const number = 11;
        const result = libs.absolute(number);
        expect(result).toBe(11);
    });
    it('return positive number if number is 12', () => {
        const number = 12;
        const result = libs.absolute(number);
        expect(result).toBe("Fizz");
    });
    it('return positive number if number is 13', () => {
        const number = 13;
        const result = libs.absolute(number);
        expect(result).toBe(13);
    });
    it('return positive number if number is 14', () => {
        const number = 14;
        const result = libs.absolute(number);
        expect(result).toBe(14);
    });
    it('return positive number if number is 15', () => {
        const number = 15;
        const result = libs.absolute(number);
        expect(result).toBe("FizzBuzz");
    });
    it('return positive number if number is 30', () => {
        const number = 30;
        const result = libs.absolute(number);
        expect(result).toBe("FizzBuzz");
    });
    it('return positive number if number is 40', () => {
        const number = 40;
        const result = libs.absolute(number);
        expect(result).toBe("Buzz");
    });
    it('return positive number if number is 66', () => {
        const number = 66;
        const result = libs.absolute(number);
        expect(result).toBe("Fizz");
    });
    it('return positive number if number is 87', () => {
        const number = 87;
        const result = libs.absolute(number);
        expect(result).toBe("Fizz");
    });
    it('return positive number if number is 100', () => {
        const number = 100;
        const result = libs.absolute(number);
        expect(result).toBe("Buzz");
    });
});