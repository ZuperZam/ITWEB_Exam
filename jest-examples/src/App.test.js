import React from 'react';
import {add , subtract, integrateAdd} from './App';

//Simple fake test. Passes if true is truthy
test('fakePassedTest', () => {
    expect(true).toBeTruthy();
});

// Simple fake test. Passes if false is falsy
test('fakeFailedTest', () => {
    expect(false).toBeTruthy();
});

//Add numbers together
test('add', () => {
    expect(add(1,2)).toBe(3);
    expect(add(-1,2)).toBe(1);
    expect(add(-1,-2)).toBe(-3);
});

//Subtract numbers from each other
test('subtract', () => {
    expect(subtract(1,2)).toBe(-1);
    expect(subtract(-1,2)).toBe(-3);
    expect(subtract(-1,-2)).toBe(1);
});

//Inegration testing add. add 'integrated' to the number to pass
test('integrateAdd', () => {
    expect(integrateAdd(1,2)).toBe('3integrated');
});

//Mocking add
const mockAdd = jest.fn(() => 3);

test('mockingAdd', () => {
    expect(mockAdd(2,2)).toBe(3);
});