# Singly Linked List
Creating a linked list data structure in JavaScript.

## Challenge
Create a linked list constructor with nodes that contain data and a pointer to the next node in the list.

## Approach & Efficiency
This list is a Javascript object with a reference to a node object in the head.  Node object's hold data and a reference to the next node in the node's `next`.

## API
* `.insert(data)` -- Create a new node with data and attach to the front of the list.  
* `.append(data)` -- Create a new node with data and attach to the end of the list.
* `.includes(value)` -- Traverses the list, checking the value against that nodes data.  Return `true` if found, return `false` if not.
* `print()` -- Traverses the list and appends the data of each node to a results string.  Return the string.

## =============================================

# Linked List Insertions
These methods insert new node into the array, either before or after a target node.

## Approach & Efficiency
These use while loops to traverse the list.  The worst case would be to traverse the whole length of the array, so the time would be O(n).

## ==============================================

### `.getKthFromEnd(value)
Finds the node that is `value` # nodes away from the end of the list, and returns the value of that node.

### Approach & Efficiency
Uses two tracking variables, `fast` and `slow`.  Both values are initially assigned to the head of the list.  `fast` is given a head start by first looping to the node assigned with `value`.  At that point, both `fast` and `slow` traverse until `fast` is at the last node in the list.  The value of the node that is now at `slow` will be the Kth node from the end.

## ==============================================

### `.mergeLists(list1, list2)`
Takes in two linked lists and zips them together, alternating nodes into one large list.

### Approach & Efficiency
Tracking variable are assigned to the head node for both lists.  While either of the nodes is present, two tracking variables are assigned to the nodes referenced by the `.next` properties of the current nodes.  The next of the first node is assign to the current node of the second list, and the next of the second node is assigned to the next of the first list's node.  Both nodes then traverse by assigning as the next tracking variables.  This repeats until the end of one list is found, where the remaining list will continue.

### Whiteboard
Jag, Becky, Jesse and I whiteboarded together to come to a solution.  Jag created this whiteboard image for us.

<img src="./assets/linked-list-zip-merge.jpg" alt="LL-Merge" width="800"/>