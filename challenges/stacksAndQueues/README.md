# Stacks and Queues
The stacks-and-queues.js file includes definitions for the Stack and Queue classes along with methods for each.

## Challenge
Write class definitions for Node, Stack and Queue. Include methods for Stack and Queue. Include proper testing.

## Approach & Efficiency
The space and time efficieny for the Queue and Stack methods are O(1),  although it could be argued that the Queue enqueue method is O(n) because of the use of arrays and shift. 

## API
Stacks:
* push: push takes a value and adds it the top of the stack
* pop: removes the top value from the stack and returns it
* peek: reutrns the top value of the stack without removing it

Queues:
* enqueue: take a value and adds a node to the rear of the Queue
* dequeue: removes the front value of the Queue.
* peek: reutrns the top value of the stack without removing it