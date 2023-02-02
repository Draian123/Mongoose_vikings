// require mongoose and destructor Schema and model from it
const { Schema, model } = require("mongoose");
var mongoose = require('mongoose');

//Create a viking schema here
const vikingSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    familyName: {
      type: String,
      required: true
    },
    strength: {
      type: Number,
    },
    weapon:{
        type: String
    }
  });

//<======Don't forget Module.export ============>
const Viking = mongoose.model('Viking', vikingSchema);
 
module.exports = Viking;
//<================Schema=====================>
