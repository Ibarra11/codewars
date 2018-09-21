var findDup = function (arr) {
    
    // Problem: find the sole duplicate in a unordered array
    // Input: [1,2,3,1]
    // Output: 1

    // storage is going to cache the values
    let storage = {};
    for (let i = 0; i < arr.length; i++) {
        // If the element exist as a property on the object, then it is a duplicate, so we return the value
        if (storage[arr[i]]) {
            return arr[i];
        }
        // Otherwise we add the element as a property on the object
        else {
            storage[arr[i]] = true;
        }
    }
}

findDup([1, 2, 3, 1]);