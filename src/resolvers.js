const Users = require('./User');

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, { name, email }) => Users.create({ name, email }),
  },
}