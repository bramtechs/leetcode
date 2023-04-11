public class Solution {

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if (l1 == null || l2 == null)
            return null;

        ListNode results = new ListNode();
        ListNode rn = results;
        while (true) {
            int left = l1 == null ? 0 : l1.val;
            int right = l2 == null ? 0 : l2.val;
            int sum = left + right;
            rn.val += sum;
            rn.val %= 10;

            l1 = l1 == null ? null:l1.next;
            l2 = l2 == null ? null:l2.next;
            if (l1 == null && l2 == null) {
                break;
            }

            rn.next = new ListNode(sum / 10);
            rn = rn.next;
        }

        return results;
    }

    public static void main(String[] args) {
        {
            ListNode l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
            ListNode l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
            ListNode results = new Solution().addTwoNumbers(l1, l2);
            System.out.println(results.toString());
        }
        {
            ListNode l1 = ListNode.repeating(9, 7);
            ListNode l2 = ListNode.repeating(9, 4);
            ListNode results = new Solution().addTwoNumbers(l1, l2);
            System.out.println(results.toString());
        }
    }
}
