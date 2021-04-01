const { Schema, model } = require('mongoose');

const attendantSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  foodChoice: {
    type: String,
    required: true,
  }
});

const Attendant = model('Attendant', attendantSchema);

module.exports = Attendant;