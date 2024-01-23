export function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(num, i);
    }
    return [];
};

export function twoSumBruteForce(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

export function twoSumFast(nums: number[], target: number): number[] {
    const matches: any = {};
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];

        if (Number.isInteger(matches[number])) {
            return [matches[number], i];
        }

        if (!matches[number]) {
            matches[target - number] = i;
        }
    }
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
console.log(twoSumBruteForce(nums, target));
console.log(twoSumFast(nums, target));