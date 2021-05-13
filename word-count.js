module.exports = (arr) => {
  return arr.reduce((acc, el) => {
    acc[el] = acc[el] ++ || 1;
    return acc;
  }, {})
}
