function createPhoneNumber(numbers){
  const str = numbers.join('');
  const match = str.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
  return `(${match[1]}) ${match[2]}-${match[3]}`
}
