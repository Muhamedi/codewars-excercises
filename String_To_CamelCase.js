function toCamelCase(str){
  if(!str) {
    return str;
  }
  const splitedStr = str.split(/[-_]/);
  for(let i = 0; i < splitedStr.length; i++) {
     const splitedWord = splitedStr[i].split('');
     if(i > 0) {
        splitedWord[0] = splitedWord[0].toUpperCase();
     }
     const word = splitedWord.join('');
     splitedStr[i] = word;
  }
  return splitedStr.join('');
}
