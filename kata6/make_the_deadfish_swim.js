function parse(data) {
    let returnArray = [];
    let value = 0;
    for(let char of data){
        switch(char){
            case 'i':
                value++;
                break;
            case 'd':
                value--;
                break;
            case 's':
                value *= value;
                break;
            case 'o':
                returnArray.push(value);
                break;
            default:
                break;
        }
    }
    return returnArray;
}