function merge(nums1: number[], nums2: number[]): number[] {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length || j < nums2.length) {
        if (i >= nums1.length) {
            merged.push(nums2[j]);
            j++;
        } else if (j >= nums2.length) {
            merged.push(nums1[i]);
            i++;
        } else if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    return merged;
}

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = merge(nums1, nums2);
    const middle = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[middle] + merged[middle - 1]) / 2;
    }
    return merged[middle];
}

export function findMedianSortedArraysFast(nums1: number[], nums2: number[]): number {
    const mergedArray: number[] = []
    let pointer1 = 0;
    let pointer2 = 0;

    while (mergedArray.length !== nums1.length + nums2.length) {
        if ((nums1[pointer1] <= nums2[pointer2] || pointer2 >= nums2.length) && pointer1 < nums1.length) {
            mergedArray.push(nums1[pointer1]);
            pointer1 = pointer1 + 1
        } else if ((nums2[pointer2] <= nums1[pointer1] || pointer1 >= nums1.length) && pointer2 < nums2.length) {
            mergedArray.push(nums2[pointer2])
            pointer2 = pointer2 + 1
        }
    }
    const length = mergedArray.length
    if (length % 2) {
        return mergedArray[(length - 1) / 2]
    } else {
        const item1 = mergedArray[length / 2]
        const item2 = mergedArray[(length / 2) - 1]

        return (item1 + item2) / 2
    }
};

const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4));
