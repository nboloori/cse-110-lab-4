1. The last value of i will be outputted. i is the length of the prices array. In this case, the ouput would be 3
2. The last value of discountedPrice will be outputted. In this case, the output would be 150.
3. The last value of finalPrice will be outputted. In this case, the output would be 150.
4. The array discounted which will store 3 values containing the discounted prices of the inputted items. This is because var makes sure that discounted has a functional scope so any additions to it will be remembered until the return statement. Each time the for loop is entered, a new value is added to the array. In this case, the output will be [50, 100, 150].
5. Error, i is only declared within the for loop. Outside of that scope it is not accessible.
6. Error, discountedPrice is only declared withing the floor loop. Outside of that scope it is not accessible.
7. The last value of finalPrice will be outputted. In this case, the output would be 150.
8. The array discounted which will store 3 values containing the discounted prices of the inputted items. This is because let is used in the functional block so its value carries throughout the function. In other words, discounted has a functional scope so any additions to it will be remembered until the return statement. Each time the for loop is entered, a new value is added to the array. In this case, the output will be [50, 100, 150].
9. Error, i is only declared within the for loop. Outside of that scope it is not accessible.
10. The value of length will be outputted. In this case, the output would be 3.
11. The array discounted which will store 3 values containing the discounted prices of the inputted items. This is because, although the array is declared as a constant, it behaves as a reference to a list of items. The array itself is not being altered, rather the list of items is being added to. Each time the for loop is entered, a new value is added to the list. In this case, the output will be [50, 100, 150].
12. <br>```A. student.name or student['name']```<br>```B. student['Grad Year']```<br>```C. student.greeting() or student.['greeting']()```<br>```D. student['Favorite Teacher'].name or student['Favorite Teacher']['name']```<br>```E. student.courseLoad[1] or student['courseLoad'][1]```
13. <br>A. 32, 2 is being casted to a string<br>B. 1, '3' is being casted to a number<br>C. 3, null is being casted to a number 0<br>D. 3null, null is being casted to a string 'null'<br>E. 4, true is being casted to a number 1<br>F. 0, both values are being casted to a number 0<br>G. 3undefined, undefined is being casted to a string 'undefined'<br>H. NaN, subtraction attempts to cast the values to numbers but undefined cannot be casted to a number hence NaN (not a number)
14. <br>A. true, '2' is casted to a number<br>B. false, a dictionary comparison is used and '2' > '1'<br>C. true, '2' is casted to a number<br>D. false, strict equality considers operands of different types to be different<br>E. false, true is being casted a number 1<br>F. true, the Boolean constuctor treats nonzero integers as true
15. The ```==``` operator will compare two values, casting as necessary. Two different data types can be considered equal using this operation. The ```===``` will not cast different data types to match and will return false if two data types are different.
16. See part2-question16.js
17. The result will be [2, 4, 6]. This is because modifyArray will go through all the values in the passed-in array and multiply them by two as specified by doSomething.
18. See part2-question18.js
19. 1432