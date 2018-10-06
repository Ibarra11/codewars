var moveZeros = function (arr) {
    /* 
        Codewars Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0
        Problem: Write an algorithim that takes an array and moves all of the zeros to the end, preserving the
                 order of the other elements.
        Sample Data:
            [false,1,0,1,2,0,1,3] => [false,1,1,2,1,3,0,0]
    */
    // tempArr is going to store the non zero elements in the array
    let tempArr = [];
    // numberOfZeros is going to keep track of how many zeros where in the array, so I can add them after
    let numberOfZeros = 0;

    /* 
        For loop is going to place the correct values in tempArr and number of Zeros.
            Ex: Once for loop is finished
                arr = [false, 1,0,1,2,0,1,3]
                tempArr = [false, 1,1,2,1,3]
                numberOfZeros = 2
    */
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            tempArr.push(arr[i])
        } else {
            numberOfZeros++;
        }
    }
      /* 
        tempArr know has the non zero elements of the original array.  And we know how many zeros were present in 
        the original array.  All thats left to do is to add the remaining zeros to the end of  tempArr.
    */
    for (let i = 0; i < numberOfZeros; i++) {
        tempArr.push(0);
    }
    return tempArr;
}