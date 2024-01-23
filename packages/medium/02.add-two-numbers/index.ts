export class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let result: ListNode | null = null;
    let current: ListNode | null = null;
    while (l1 || l2) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        carry = Math.floor(sum / 10);
        const node = new ListNode(sum % 10);
        if (!result) {
            result = node;
        }
        if (current) {
            current.next = node;
        }
        current = node;
        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }
    if (carry) {
        if (current) {
            current.next = new ListNode(carry);
        }
    }
    return result;
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));

l1 = new ListNode(0);
l2 = new ListNode(0);
console.log(addTwoNumbers(l1, l2));

l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
console.log(addTwoNumbers(l1, l2));