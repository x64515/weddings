const { Schema, model } = require('mongoose');

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
  attendants: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Attendant'
    }
  ],
  location:{
      type: String,
      required: true,
  },
  meals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    }
  ],  
});

const Wedding = model('Wedding', weddingSchema);

module.exports = Wedding;
