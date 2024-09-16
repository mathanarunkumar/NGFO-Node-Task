const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name:
   {
     type: String, 
     required: true 
    },
  dob: { 
    type: Date,
     required: true 
    },
  gender: { 
     type: String,
       required: true 
    },
  country: { 
    type: String,
     required: true
     },
  state: { 
    type: String, 
    required: true 
},
  photo: {
     type: String 
  },
  email: {
     type: String, 
     required: true, 
     unique: true 
  },
  mobile: { 
    type: String, 
    required: true, 
    unique: true 
 },
  hobbies: { 
    type: String, 
    required: true 
 },
  education: { 
    type: String, 
    required: true 
},
});

module.exports = mongoose.model('student', studentSchema);
