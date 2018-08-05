function wave(term){
    let termArr = term.split('');
    let waveArr = []
    for(let i = 0; i < term.length; i++){
      if(term[i] !== ' '){
        termArr[i] = termArr[i].toUpperCase();
        waveArr.push(termArr.join(''));
        termArr[i] = termArr[i].toLowerCase();
      }
    }
  return waveArr;
  }
  