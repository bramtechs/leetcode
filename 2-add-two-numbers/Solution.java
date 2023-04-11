public class Solution {

    private int addNodes(ListNode n1, ListNode n2) {
        int left = n1 == null ? 0:n1.val;
        int right = n2 == null ? 0:n2.val;
        return left + right;
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode results = new ListNode();
        ListNode rn = results;
        while(true) {
            int sum = addNodes(l1,l2);
            rn.val += sum % 10;
            l1 = l1.next;
            l2 = l2.next;
            if (l1 == null || l2 == null) {
                break;
            }

            rn.next = new ListNode(sum / 10);
            rn = rn.next;
        }

        return results;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
        ListNode l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
        ListNode results = new Solution().addTwoNumbers(l1,l2);
        while(true){
            System.out.print(Integer.toString(results.val) + " ");
            if (results.next != null){
                results = results.next;
            } else {
                break;
            }
        }
    }
}
