const { Schema, model } = require('mongoose');
const Meal = require('./Meal');
const Attendant = require('./Attendant');

const weddingSchema = new Schema({
  weddingDate: {
    type: Date,
    required: true,
  },
  bride: {
    type: String,
    required: true,
  },
  groom: {
    type: String,
    required: true,
  },
  attendants: [Attendant.schema],
  location:{
      type: String,
      required: true,
  },
  meals: [Meal.schema],  
});

const Wedding = model('Wedding', weddingSchema);

module.exports = Wedding;
