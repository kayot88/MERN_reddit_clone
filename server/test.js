// const number = '123222223333'
// const getHiddenCard = (number, test2) => {
// const onlyFour = number.slice(-4)
// const result = onlyFour.padStart(test2, '*');
// return console.log(result);
// };
// getHiddenCard(test, 8);

const getHiddenCard = (one, width=4) => {
//  const eee = one
//    .toString()
//    .slice(-4)

return one
  .toString()
  .slice(-4)
  .padStart(4 + width, '*');
};


const hiddenCardNumber = getHiddenCard(2034399002125581, 4);
console.log(hiddenCardNumber);