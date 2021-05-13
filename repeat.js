module.exports = (func, num) => {
  for(let i=0; i<num; i++) {
    func();
  }
}
