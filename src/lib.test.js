import {expect, test} from '@jest/globals'
import {add, minus} from './lib'

test('add two numbers and it should return the total', () => {
  expect(add(2,2)).toBe(4)
})