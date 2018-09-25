function stripUrlParams(url, paramsToStrip) {
    /* 
      Problem: Remove duplicate query string paramaters from the url. Remove any query string
               paramaters specified within the 2nd arguement (optional)
      Input: 'www.codewars.com?a=1&b=2&a=2', ['b']
      Output: www.codewars.com?a=1
    */
  
    // The first thing i check for is the presence of a ? in the string because if there
    // isnt one present then we are no paramaters and we can return the url.
    let queryParamater = url.indexOf('?');
    if(queryParamater === -1){
      return url;
    }
  
    // I am going to use an object as cache for the paramaters. And I am also going to keep track
    // of the number of paramaters.
    let paramUrlObject = {}
    let paramLength = 0;
  
    /* 
      The next step is splitting the url and the paramaters from each other and putting the individual paramaters in an array.  Once I have the array of paramaters I am going to iterate
      over each element in the array
      Ex:
        url = www.codewars.com?a=1&b=2&a=2
         ['a=1', 'b=2', 'a=2]
    */
    let paramUrl = url.substring(queryParamater + 1).split('&').map(param => {
      // Before I check the paramaters I first want to check that a second optional arguement was provided
      if (paramsToStrip) {
        /* 
          If the second arguement was provided then I check if the paramater exist in the object 
          cache and also if exist in the second arguement.  If they dont then I can add param and the value to the cache.
          Ex: Example Case
            param = 'a=1';
            paramUrlObject = {};
            paramsToStrip = ['b'];
            if( !paramUrlObject[param[0]] && !paramsToStrip.includes[param[0]])
                paramUrlObject[param[0]] = param[2]
            paramUrlObject = {a:1};
        */
        if (!paramUrlObject[param[0]] && !paramsToStrip.includes(param[0])) {
          paramUrlObject[param[0]] = param[2];
          paramLength += 1;
        }
      }
      else {
         /* 
          If the second arguement wasnt provided then I check if the paramater exist in the object 
          cache.  If they dont then I can add param and the value to the cache.
        */
        if (!paramUrlObject[param[0]]) {
          paramUrlObject[param[0]] = param[2];
          paramLength += 1;
        }
      }
    });
  
    url = url.substring(0, queryParamater+1);
    let index = 1;
    for(prop in paramUrlObject){
      if(index === paramLength){
        url += prop + '=' + paramUrlObject[prop];
      }
      else{
        url += prop + '=' + paramUrlObject[prop] + '&';
        index++;
      }
    }
    return url;
  }
  
  
  stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']);