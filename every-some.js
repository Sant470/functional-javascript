module.exports = (users) => {
  return (selectedUsers) => {
    return selectedUsers.every((selectedUser) => {
      return users.some((user) => {
        return user.id === selectedUser.id;
      });
    });
  }
}
