function solution(input){
    // Split the data into [category, item] format
    // Ex: ['fruit_bannana', 'vegetable_carrot'] => [['fruit', 'bannana'], ['vegetable', 'carrot]]
    let groceryItems = input.split(',').map(item => item.split('_'));
    // Store the items in an object by category.
    let groceryStorage = {fruit: [], meat: [], other:[], vegetable:[]};
    let resultString = '';
    
    groceryItems.forEach(groceryItem =>{
      // if there is a cateogory other than fruit, vegetable, or meat, it is of category other
      let category =  ['fruit', 'vegetable', 'meat'].includes(groceryItem[0]) ?  groceryItem[0] : 'other';
      let item = groceryItem[1];
      // Adding the item to the correct category
      /* 
        category = 'fruit'
        item = 'bannana';
        groceryStorage[category].push(item) => {fruit: [bannana]}
        ----------------------------
        category = 'vegetable'
        item = 'carrot';
        groceryStorage[category].push(item) => {vegetable: [carrot]}
      */
        groceryStorage[category].push(item);
    })
  
    // groceryStorage should now have an array of items for each category
    //  So I am going to loop throught each category in the groceryStorage
    // Each category holds an array, so I am going to sort the items and then join into a string 
    // I am then going to add a newline character after every string except for the vegetable category
    for(let prop in groceryStorage){
      resultString += prop + ':' +  groceryStorage[prop].sort().join(',') + (prop !== 'vegetable' ? '\n': '');
    }
   return resultString;
  }
  