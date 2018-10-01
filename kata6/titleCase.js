function titleCase(title, minorWords) {
    /* 
        Codewars Link: https://www.codewars.com/kata/5202ef17a402dd033c000009
        Problem: Write a function that will convert a string into title case, given an
        list of exceptions(minor words).
        Input:
            # of arguements: 2, but second is optional
            Sample Input: 
                'a clash of KINGS', 'a an the of' => 2 arguements
                'the quick brown fox' => one arguement
        Output:
             Sample Output:
                'A Clash of Kings'
                'The Quick Brown Fox'
    */

    // In this condition we are checking if the title paramateris empty because if its we are going to 
    //  an empty string
    if (title === '') {
        return '';
    }
    else {
        let checkMinorWords;
        let minorWordsToArr;
        /* 
            As was previously stated, the second arguement is optional.  In this condition we are validating
            its existence.  If it does exist then I am going to split the optional words in to an array. Also,
            I am going to set a variable to true, so I can later in the program that there was a second arguement.
            Ex:
                minorWords = 'a an the of'
                minorWordsToArr = ['a', 'an', 'the', 'of']
        */
        if (minorWords) {
            minorWordsToArr = minorWords.split(' ').map(e => e.toLowerCase());
            checkMinorWords = true;
        }
        else {
            checkMinorWords = false;
        }
        /* 
            In this part of the code, I began by splitting the title string into individual words in a 
            array.
                Ex: 'a clash of KINGS' => ['a', 'clash', 'of', 'KINGS']
            I then proceed to undercase each word in the array. The reason is because the regex expression is 
            set up to only check undercase alphabetic letters.  
        */
        let strToArray = title.split(' ').map((word, index) => {
            word = word.toLowerCase();
            if (checkMinorWords) {
                if (minorWordsToArr.includes(word) && index !== 0) {
                    return word;
                }
            }
            let firstCharOfWord = word[0].toUpperCase();
            let restOfWord = word.substring(1);
            return firstCharOfWord + restOfWord;
        })
        return strToArray.join(' ')
    }
}

titleCase('the quick brown fox', 'quick');