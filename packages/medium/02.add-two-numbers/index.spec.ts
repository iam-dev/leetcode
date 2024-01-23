import { expect, test } from "bun:test";
import { addTwoNumbers, ListNode } from ".";

test("addTwoNumbers [2, 4, 3], [5, 6, 4]", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const result = addTwoNumbers(l1, l2);
    expect(result).toStrictEqual(new ListNode(7, new ListNode(0, new ListNode(8))));
});

test("addTwoNumbers [0], [0]", () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);
    const result = addTwoNumbers(l1, l2);
    expect(result).toStrictEqual(new ListNode(0));
});

test("addTwoNumbers [9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]", () => {
    const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
    const result = addTwoNumbers(l1, l2);
    expect(result).toStrictEqual(new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))));
});