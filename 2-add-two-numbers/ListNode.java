public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    @Override
    public String toString() {
        ListNode node = this;
        StringBuilder builder = new StringBuilder();
        while (true) {
            builder.append(node.val);
            if (node.next != null) {
                builder.append(" >> ");
                node = node.next;
            } else {
                break;
            }
        }
        return builder.toString();
    }

    public static ListNode repeating(int val, int count) {
        ListNode node = new ListNode();
        ListNode n = node;
        for (int i = 0; i <= count; i++) {
            n.val = val;
            n.next = new ListNode(val);
            n = n.next;
        }
        return node;
    }
}
