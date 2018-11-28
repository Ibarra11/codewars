function dashatize(num) {
    let intToString = String(num);
    let tempArr = [];
    for (let i = 0; i < intToString.length; i++) {
        if (/[0-9]/.test(intToString[i])) {
            if (intToString[i] % 2 === 1 && i !== intToString.length - 1) {
                if (tempArr[tempArr.length - 1] === '-' || tempArr.length === 0) {
                    tempArr.push(intToString[i], '-');
                }
                else {
                    tempArr.push('-', intToString[i], '-');
                }
            }
            else if (intToString[i] % 2 === 1 && tempArr[tempArr.length - 1] !== '-' && tempArr.length > 0) {
                tempArr.push('-', intToString[i]);
            }
            else {
                tempArr.push(intToString[i]);
            }
        }
    }
    return tempArr.length > 0 ? tempArr.join('') : num + '';
}