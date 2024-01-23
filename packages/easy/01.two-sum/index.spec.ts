import { expect, test } from "bun:test";
import { twoSum, twoSumBruteForce, twoSumFast } from ".";

test("twoSum [2, 7, 11, 15], 9", () => {
    const nums: number[] = [2, 7, 11, 15];
    const target: number = 9;
    const result: number[] = twoSum(nums, target);
    expect(result).toStrictEqual([0, 1]);
});

test("twoSumBruteForce [2, 7, 11, 15], 9", () => {
    const nums: number[] = [2, 7, 11, 15];
    const target: number = 9;
    const resultBruteForce: number[] = twoSumBruteForce(nums, target);
    expect(resultBruteForce).toStrictEqual([0, 1]);
});

test("twoSumFast [2, 7, 11, 15], 9", () => {
    const nums: number[] = [2, 7, 11, 15];
    const target: number = 9;
    const resultFast: number[] = twoSumFast(nums, target);
    expect(resultFast).toStrictEqual([0, 1]);

});

test("twoSum [3, 2, 4], 6", () => {
    const nums: number[] = [3, 2, 4];
    const target: number = 6;
    const result: number[] = twoSum(nums, target);
    expect(result).toStrictEqual([1, 2]);
});

test("twoSumBruteForce [3, 2, 4], 6", () => {
    const nums: number[] = [3, 2, 4];
    const target: number = 6;
    const resultBruteForce: number[] = twoSumBruteForce(nums, target);
    expect(resultBruteForce).toStrictEqual([1, 2]);
});

test("twoSumFast [3, 2, 4], 6", () => {
    const nums: number[] = [3, 2, 4];
    const target: number = 6;
    const resultFast: number[] = twoSumFast(nums, target);
    expect(resultFast).toStrictEqual([1, 2]);
});