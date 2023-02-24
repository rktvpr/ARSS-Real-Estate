const { AuthenticationError } = require('apollo-server-express');
const { User, listings } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('Listings');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('Listings');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return listings.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return listings.findOne({ _id: listingsId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('Listings');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  },
};

module.exports = resolvers;
