module.exports = reverse = (character) => {
  let result = "";
  for (i = character.length - 1; i >= 0; i--) {
    result += character[i];
  }
  // Yang di return adalah reversed String
  return result;
};
