## Starting array:
[ 8, 4, 23, 42, 16, 15 ]

## First Pass
On this pass: [ 8, 4, 23, 42, 16, 15 ] LEFT 0 RIGHT 5 On our first pass in quickSort function, along with a left and right value: first and last index.

 In this pass, we have left = 0, and right = 5. We then compare all of the values to the left of the right value .If they are larger than 15, we move them to the left.
 
 ##### The result is the following: [ 8, 4, 15, 42, 16, 23 ]

## Second Pass
On this pass: [ 8, 4, 15, 42, 16, 23 ] LEFT 0 RIGHT 1 On our second pass in the resulting array from the first pass, along with a left and right value: left = 0, and right = 1.

 We then compare all of the values to the left of the right value (index 1: 4). If they are larger than 4, we move them to the left. 

##### The result is the following: [ 4, 8, 15, 42, 16, 23 ]

## Third Pass
On this pass: [ 4, 8, 15, 42, 16, 23 ] LEFT 3 RIGHT 5 On our third pass array from the second pass, along with a left and right value: left = 3, and right = 5. We then compare all of the values to the left of the right value (index 5: 23). If they are larger than 23, we move them to the left. 

##### The result is the following which is our final output (and fully sorted array): [ 4, 8, 15, 16, 23, 42 ]