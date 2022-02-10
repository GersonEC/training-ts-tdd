import { sort } from '../src/sort/sort'

describe("Sort", () => {
  test("should return empty array when is given an empty array", () => {
    expect(sort([])).toEqual([]);
  })

  test("when given an array with one number should return the same", () => {
    expect(sort([2])).toEqual([2]);
  })

  test("when given an array with two numbers already sorted should return the same", () => {
    expect(sort([1, 2])).toEqual([1, 2]);
  })

  test("when given an array with two numbers not sorted should return the array sorted", () => {
    expect(sort([2, 1])).toEqual([1, 2]);
  })

  test("when given an array with three numbers already sorted should return the array sorted", () => {
    expect(sort([1, 2, 3])).toEqual([1, 2, 3]);
  })

  test("when given an array with three numbers not sorted should return the array sorted", () => {
    expect(sort([2, 1, 3])).toEqual([1, 2, 3]);
    expect(sort([1, 3, 2])).toEqual([1, 2, 3]);
    expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
  })

  test("when given an array with a lot of numbers not sorted should return the array sorted", () => {
    expect(sort([3, 1, 4, 5, 9, 2, 6, 7, 2, 6])).toEqual([1, 2, 2, 3, 4, 5, 6, 6, 7, 9]);
  })
  
})