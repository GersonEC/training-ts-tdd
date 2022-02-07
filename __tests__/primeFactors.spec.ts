import {factorsOf} from '../primeFactors';

describe("Prime Factors", () => {
  it("factors", () => {
    expect(factorsOf(1)).toEqual([])
    expect(factorsOf(2)).toEqual([2]);
    expect(factorsOf(3)).toEqual([3]);
    expect(factorsOf(4)).toEqual([2, 2]);
    expect(factorsOf(5)).toEqual([5]);
    expect(factorsOf(6)).toEqual([2,3]);
    expect(factorsOf(7)).toEqual([7]);
    expect(factorsOf(8)).toEqual([2, 2, 2]);
    expect(factorsOf(2 * 2 * 3 * 5 * 5 * 7 * 11 * 11 * 13))
    .toEqual([2, 2, 3, 5, 5, 7, 11, 11, 13]);

  })
})