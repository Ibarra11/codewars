function list(names){
    if(names.length < 0){
      return ''
    }
    else if (names.length ===  1){
        return names[0].name
    }
    else{
      let tempStr = '';
      for(let i = 0; i < names.length; i++){
        if(i === names.length - 2){
          tempStr += names[i].name + ' & ' + names[i+1].name;
          break;
        }
        else{
          tempStr += names[i].name + ', '
        }
      }
      return tempStr;
    }
  }