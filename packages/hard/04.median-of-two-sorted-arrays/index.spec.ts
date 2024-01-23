import { expect, test } from "bun:test";
import { findMedianSortedArrays, findMedianSortedArraysFast } from ".";

test("findMedianSortedArrays [1, 3], [2]", () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    const result = findMedianSortedArrays(nums1, nums2);
    expect(result).toStrictEqual(2);
});

test("findMedianSortedArrays [1, 2], [3, 4]", () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const result = findMedianSortedArrays(nums1, nums2);
    expect(result).toStrictEqual(2.5);
});

test("findMedianSortedArraysFast [1, 3], [2]", () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    const result = findMedianSortedArraysFast(nums1, nums2);
    expect(result).toStrictEqual(2);
});

test("findMedianSortedArraysFast [1, 2], [3, 4]", () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const result = findMedianSortedArraysFast(nums1, nums2);
    expect(result).toStrictEqual(2.5);
});