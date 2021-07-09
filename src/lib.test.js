import {expect, test} from '@jest/globals'
import {add, minus, multiply} from './lib'
import { getType } from 'jest-get-type'

let numbers = [
  [2,2,4],
  [5,2,10],
  [5,5,25]
]

describe('Testing multiply() function', () => {
  test.each(numbers)('Multiply %i * %i = %i', (a,b,c) => {
    expect(multiply(a,b)).toBe(c)
  })
  test('if a function has no parameters, it should return null', () => {
    expect(multiply()).toBeNull()
  })
})


describe('Testing add() function', () => {
  test('add two numbers and it should return the total', () => {
    expect(add(2,2)).toBe(4)
    expect(add(5,5)).toBe(10)
    expect(add(23,50)).toBe(73)
    expect(add(1000,4000)).toBe(5000)
  })
  
  test('make sure it\'s returning a number, not a string', () => {
    expect(add(2,2)).not.toBeNull()
    expect(add(2,2)).not.toBeNaN()
    expect(add(2,2)).not.toBeUndefined()
    expect(getType(add(2,2))).not.toBe('string')
  
  })

  test('if a function has no parameters, it should return null', () => {
    expect(add()).toBeNull()
  })
})

describe('Testing minus() function', () => {
  test('minus two numbers and it should return the total', () => {
    expect(minus(2,2)).toBe(0)
    expect(minus(5,5)).toBe(0)
    expect(minus(23,50)).toBe(-27)
    expect(minus(1000,4000)).toBe(-3000)
  })
  
  test('make sure it\'s returning a number, not a string', () => {
    expect(minus(2,2)).not.toBeNull()
    expect(minus(2,2)).not.toBeNaN()
    expect(minus(2,2)).not.toBeUndefined()
    expect(getType(minus(2,2))).not.toBe('string')
  
  })

  test('if a function has no parameters, it should return null', () => {
    expect(minus()).toBeNull()

  
  })
})


//.skip & .only can apply on whole tests or individual unit tests 

/* describe.only('Testing minus() function', () => {}
describe.skip('Testing minus() function', () => {}
test.only('minus two numbers and it should return the total', () => {
test.skip('minus two numbers and it should return the total', () => { */
