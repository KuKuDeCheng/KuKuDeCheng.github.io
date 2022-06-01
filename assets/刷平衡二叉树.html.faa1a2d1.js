import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as r,c as B,b as n}from"./app.cd174add.js";const i={};function d(o,a){const e=t("Presentation");return r(),B("div",null,[n(e,{id:"presentation-1a96284a","data-code":"%0A---%0A%0A%23%23%20110-%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91%0A%0A!%5B%5D(.%2Fimg%2F110%2F1.png)%0A%0A--%0A%0A!%5B%5D(.%2Fimg%2F110%2F2.png)%0A%0A--%0A%0A%60%60%60java%0Aclass%20Solution%20%7B%0A%20%20%20%20public%20boolean%20isBalanced(TreeNode%20root)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%E5%90%8E%E5%BA%8F%0A%20%20%20%20%20%20%20%20if%20(traverse(root)%20%3C%200)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20int%20traverse(TreeNode%20node)%7B%0A%20%20%20%20%20%20%20%20if%20(null%20%3D%3D%20node)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%200%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20int%20leftH%20%3D%20traverse(node.left)%3B%0A%20%20%20%20%20%20%20%20int%20rightH%20%3D%20traverse(node.right)%3B%0A%20%20%20%20%20%20%20%20if%20(leftH%20%3D%3D%20-1%20%7C%7C%20rightH%20%3D%3D%20-1%20%7C%7C%20Math.abs(rightH%20-%20leftH)%20%3E%201)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E4%B8%8D%E5%90%88%E6%A0%BC%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20-1%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%BD%93%E5%89%8D%E8%8A%82%E7%82%B9%E4%B8%BAroot%E7%9A%84%E5%AD%90%E6%A0%91%E5%90%88%E6%A0%BC%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20Math.max(leftH%2C%20rightH)%20%2B1%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%7D%0A%7D%0A%60%60%60%0A%0A---%0A%0A%23%23%20108-%E5%B0%86%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%0A%0A!%5B%5D(.%2Fimg%2F108%2F1.png)%0A%0A--%0A%0A%60%60%60java%0Aclass%20Solution%20%7B%0A%20%20%20%20public%20TreeNode%20sortedArrayToBST(int%5B%5D%20nums)%20%7B%0A%20%20%20%20%20%20%20%20return%20buildTree(nums%2C%200%2C%20nums.length-1)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20TreeNode%20buildTree(int%5B%5D%20nums%2C%20int%20start%2C%20int%20end)%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%E9%80%92%E5%BD%92%E6%89%BE%E4%B8%AD%E4%BD%8D%E6%95%B0%0A%20%20%20%20%20%20%20%20if%20(start%20%3E%20end)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20null%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20int%20median%20%3D%20(end%20-%20start)%2F2%3B%0A%20%20%20%20%20%20%20%20TreeNode%20node%20%3D%20new%20TreeNode(nums%5Bmedian%5D)%3B%0A%20%20%20%20%20%20%20%20node.left%20%3D%20buildTree(nums%2C%20start%2C%20median%20-1)%3B%0A%20%20%20%20%20%20%20%20node.right%20%3D%20buildTree(nums%2C%20median%20%2B1%2C%20end)%3B%0A%20%20%20%20%20%20%20%20return%20node%3B%20%0A%20%20%20%20%7D%0A%7D%0A%60%60%60%0A%0A---%0A%0A%23%23%20109-%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8%E8%BD%AC%E6%8D%A2%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%0A%0A!%5B%5D(.%2Fimg%2F109%2F1.png)%0A%0A--%0A%0A%E5%B0%86109%E8%BD%AC%E6%88%90108%E8%A7%A3%E9%A2%98%E3%80%82%0A%60%60%60java%0Aclass%20Solution%20%7B%0A%20%20%20%20List%3CInteger%3E%20valList%20%3D%20new%20ArrayList()%3B%0A%20%20%20%20public%20TreeNode%20sortedListToBST(ListNode%20head)%20%7B%0A%20%20%20%20%20%20%20%20while%20(null%20!%3D%20head)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20valList.add(head.val)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20head%20%3D%20head.next%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20buildTree(0%2C%20valList.size()%20-%201)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20TreeNode%20buildTree(int%20start%2C%20int%20end)%7B%0A%20%20%20%20%20%20%20%20if%20(start%20%3E%20end)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20null%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20int%20mid%20%3D%20(end%20%2B%20start)%2F2%3B%0A%20%20%20%20%20%20%20%20TreeNode%20node%20%3D%20new%20TreeNode(valList.get(mid))%3B%0A%20%20%20%20%20%20%20%20node.left%20%3D%20buildTree(start%2C%20mid%20-%201)%3B%0A%20%20%20%20%20%20%20%20node.right%20%3D%20buildTree(mid%20%2B%201%2C%20end)%3B%0A%20%20%20%20%20%20%20%20return%20node%3B%0A%20%20%20%20%7D%0A%7D%0A%60%60%60%0A%0A--%0A%0A%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%2B%E4%B8%AD%E4%BD%8D%E6%95%B0%0A%60%60%60java%0Aclass%20Solution%20%7B%0A%20%20%20%20ListNode%20globalHead%3B%0A%0A%20%20%20%20public%20TreeNode%20sortedListToBST(ListNode%20head)%20%7B%0A%20%20%20%20%20%20%20%20globalHead%20%3D%20head%3B%0A%20%20%20%20%20%20%20%20int%20length%20%3D%20getLength(head)%3B%0A%20%20%20%20%20%20%20%20return%20buildTree(0%2C%20length%20-%201)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20int%20getLength(ListNode%20head)%20%7B%0A%20%20%20%20%20%20%20%20int%20ret%20%3D%200%3B%0A%20%20%20%20%20%20%20%20while%20(head%20!%3D%20null)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2B%2Bret%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20head%20%3D%20head.next%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20ret%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20TreeNode%20buildTree(int%20left%2C%20int%20right)%20%7B%0A%20%20%20%20%20%20%20%20if%20(left%20%3E%20right)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20null%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20int%20mid%20%3D%20(left%20%2B%20right%20%2B%201)%20%2F%202%3B%0A%20%20%20%20%20%20%20%20TreeNode%20root%20%3D%20new%20TreeNode()%3B%0A%20%20%20%20%20%20%20%20root.left%20%3D%20buildTree(left%2C%20mid%20-%201)%3B%0A%20%20%20%20%20%20%20%20root.val%20%3D%20globalHead.val%3B%0A%20%20%20%20%20%20%20%20globalHead%20%3D%20globalHead.next%3B%0A%20%20%20%20%20%20%20%20root.right%20%3D%20buildTree(mid%20%2B%201%2C%20right)%3B%0A%20%20%20%20%20%20%20%20return%20root%3B%0A%20%20%20%20%7D%0A%7D%0A%60%60%60%0A%0A%0A",theme:"auto"})])}var E=A(i,[["render",d],["__file","\u5237\u5E73\u8861\u4E8C\u53C9\u6811.html.vue"]]);export{E as default};
