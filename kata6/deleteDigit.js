function deleteDigit(n) {
    // highestNum: is a placeholder for the largest number
    let highestNum = 0;
    // numTemp: is the temporary placeholder for each value when deleting one digit
    let numTemp = 0;
    // Converting n to a string, so that way I can perform the substring operation.
    n = n + '';
    for (let i = 0; i < n.length; i++) {
        // Example Input = 152
        /*
            For the first iteration I want to get everything except the first element
                1st iteration
                    result => 52
         */ 
        if (i === 0) {
            numTemp = n.substring(i + 1);
        }
         /*
            For every other iteration, then i'm going to delete the index according to the i.
            Example Input = 152
                2nd iteration
                    result => 12
                3rd iteration
                    result => 15
         */   
        else {
            numTemp = n.substring(0, i) + n.substring(i + 1);
        }
        // comparing the current evaluated number with the highest number
        if (numTemp > highestNum) {
            highestNum = numTemp;
        }
    }
    // Since I converted the integer previously, I am going to convert it back when I return it
    return +highestNum;
}