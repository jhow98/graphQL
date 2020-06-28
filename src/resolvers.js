const users = [
  {id: 1, name: 'Jhonatan', email: 'jhonatan@email.com'},
  {id: 1, name: 'Beatriz', email: 'beatriz@email.com'},
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },
  Mutation: {
    createUser: () => {},
  },
}