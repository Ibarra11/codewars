/* 
    Codewars Link: https://www.codewars.com/kata/515bb423de843ea99400000a
    Problem: Create a pagination helper class, which is  a utility class helpful for querying paging information
             related to an array
*/


/* 
    Constructor Function
    Input: 
        collection: => [1,2,3,4,5,6,7,8,9,10](Arrat=y)
        itemsPerPage:  => 4(Number)
*/
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.numberOfPages = Math.ceil(this.collection.length / this.itemsPerPage)
}

/* 
    Constructor Function
    Input: Null
    Ouput:
        (this.collection = [1,2,3,4,5]) => 5
        
*/
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
}
/* 
    Constructor Function
    Input: Null
    Ouput:
        (this.numbrOfPages = 2) => 2
*/
PaginationHelper.prototype.pageCount = function () {
    return this.numberOfPages;
}

/* 
    Description: Return the number of items on the specified page.  Pages are zero indexed.
    Input: 
       pageIndex: 1(Number) 
    Output:
        (itemsOnThePage) => 5(number)
*/
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    // First check if the index is even within range of the allowable pages.  If not return -1.
    if (pageIndex < 0 || pageIndex > this.numberOfPages - 1) {
        return -1;
    }
    else {
        /* 
            If the index is within range then we return the number of items on that page.  
            Algorithim Steps:
                1. Calculate the number of items on the page
                2. Compare the number of items on that page to the total collection.  If index is greater than the
                   collection than page is not filled completely with items
                3. Return the number of Items
            Examples:
                this.itemsPerPage = 5
                this.collection = [1,2,3,4,5,6,7,8,9,10,11,12]
                --------------------------------------------
                input: pageIndex => 0
                index: 1 * 5 = 5
                index < this.collection.length => true
                    return this.itemsPerPage =>
                -------------------------------------------
                input: pageIndex => 2 
                index: 3*5 = 15
                index < this.collection.length => false
                emptyItemSpots: 15 - this.collection.length = 3
                return this.itemsPerPage - emptyItemSpots => 2
                -------------------------------------------
        */
        let index = (pageIndex + 1) * this.itemsPerPage;
        if (index < this.collection.length) {
            return this.itemsPerPage
        }
        else {
            let emptyItemSpots = index - this.collection.length;
            return this.itemsPerPage - emptyItemSpots;
        }
    }
}


/* 
    Description: Return the page index of the specified item
    Input: 
       itemIndex: 4(number)
    Output:
        (index of the item) => 0(number)
*/
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    // First check if the index is even within range
    if (itemIndex > this.collection.length - 1 || itemIndex < 0) {
        return -1;
    }
    else {
        /* 
            If the items is range, then do a simple calculation and return it.
            Examples:
                this.collection: [1,2,3,4,5,6,7,8,9,10,11,12]
                this.itemsPerPage: 5
            ---------------------------------------------
                itemIndex: 3
                floor(itemIndex / 5) => 0
                return 0
            ---------------------------------------------
                itemIndex: 7
                floor(itemIndex / 5) => 1
            ---------------------------------------------
        */
        return Math.floor(itemIndex / this.itemsPerPage)
    }
}
