const { AuthenticationError } = require('apollo-server-express');
const { User, Wedding, Attendant, Meal } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    wedding: async (parent, {_id}) =>{
      
      const wedding = await Wedding.findById(_id);

      return wedding;
  
    },
    meals: async (parent, {_id}) =>{
      const wedding = await Wedding.findById(_id);

      return wedding.meals;
    },
    
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addAttendant: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const guest = await Attendant.create(args);

        await User.findByIdAndUpdate(context.user._id, { $push: { attendants: guest } });

        return guest;
      }
      throw new AuthenticationError('Not logged in');
    },
    addMeal: async(parent, args, context) => {
      console.log(context);
      if (context.user) {
        const item = await Meal.create(args);

        await Wedding.findByIdAndUpdate(context.user._id, { $push: { meals: item } });

        return item;
      }
      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

       if (!user) {
         throw new AuthenticationError('Incorrect credentials');
       }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return {  token, user };
    }
  }
};

module.exports = resolvers;
