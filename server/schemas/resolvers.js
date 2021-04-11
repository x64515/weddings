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
    attendants: async() => {
      const att = await Attendant.find();

      return att;
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
        const guest = await Attendant.create(args);
        const user = await User.findById(context.user._id).populate('wedding');

        await Wedding.findByIdAndUpdate(user.wedding[0]._id, { $push: { attendants: guest}});
        await User.findByIdAndUpdate(context.user._id);

        return guest;
      
    },
    addMeal: async(parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const item = await Meal.create(args);
        const user = await User.findById(context.user._id);
        await Wedding.findByIdAndUpdate(user.wedding[0]._id, { $push: { meals: item } });
        await User.findByIdAndUpdate(context.user._id);

        return item;
      }
      throw new AuthenticationError('Not logged in');
    },
    addWedding: async(parent, args, context) => {
      console.log(context.user);
      if(context.user){
        const newWedding = await Wedding.create(args);

        await User.findByIdAndUpdate(context.user._id, { $push: { wedding: newWedding} });

        return newWedding;
      }
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
