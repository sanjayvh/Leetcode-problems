// https://leetcode.com/problems/split-linked-list-in-parts/
// Medium

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */

//TODO: Output not coming as expected
// try doing using linked list way instead
var splitListToParts = function (head, k) {
    if (k > head.length) {
        var res = [];
        
        for (let i = 0; i < k; i++) {
            // console.log(head[i]);

            if (head[i]) {
                res.push([head[i]]);
            }
            else
                res.push([]);

            // console.log(res);
            
        }

        return res;
    } else {
        var res = [];
        let lastIndex = head.length - 1;
        let i = 0;
        let totalItems = 0;

        while (i < head.length) {
            let innerArr = [];

            if (head.length - totalItems < k * 2) {
                for (let k = 0; k < head.length - totalItems; k++) {
                    innerArr.push(head[k]);
                }
                res.unshift(innerArr);
                break;
            }

            while (innerArr.length < k) {
                innerArr.unshift(head[lastIndex]);
                lastIndex--;
                i++;
                totalItems++;
            }

            res.unshift(innerArr);
        }

        return res;
    }
};

console.log(splitListToParts([1, 2, 3], 5));
console.log(splitListToParts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
