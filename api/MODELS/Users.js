// MONGOOSE  DEFINITION MODELS
var mongoose = require('mongoose');

// rendre possible l'utilisation des schemas
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

// definiton des shemas 
const UserTestSchema = new mongoose.Schema({
    name: String,
    surname : String,
    email : String,
    phone : {
        number : String,
        default : ""
    }
});

const UserMessSchema  = new mongoose.Schema({
    messages : [ {
        message : String
    }],
    points : Number
  });

// regrouper le tout dans un model 'myUsers' est le nom de la collection
const myUsers = mongoose.model('myUsers', UserTestSchema);

module.exports = { myUsers }