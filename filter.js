module.exports = (messages) => {
  return messages
    .filter(obj => { return obj.message.length < 50})
    .map((obj) => { return obj.message});
}
