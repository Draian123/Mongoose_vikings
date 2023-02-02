//Make sure to require your model so you can connect to the DB
const { Model } = require("mongoose");
const Viking = require("./models/User");

//This line of code connects to the Database
require("./db");

//Iteration 2:

//Iteration 3:
const data = { firstName: 'Ragnar', familyName: 'Josh', strength: 20, weapon: 'Jaw' };
const data2 = [{firstName: 'Odin', familyName: 'Joshua', strength: 10}, {firstName:'Istvan', familyName: 'Hun', strength:200000},
{firstName: 'Dennis', familyName: 'Merkel'} ] 
// Mongoose allows us to use a callback pattern
// to handle the completion of the asynchronous operation
// Viking.create(data, (error, viking) => {
//   if (error) {
//     console.log('An error happened:', error);
//     return;
//   }
//   console.log('The viking is saved and its value is: ', viking);
// //   Viking.findByIdAndRemove('63db9dad558257ae74dece82')
// //     .then(viking=> console.log('The viking is deleted: ', viking))
// //     .catch(error => console.log('An error happened:', error));

//     Viking.deleteOne({ firstName: viking.firstName})
//     .then(viking=> console.log('The viking is deleted: ', viking))
//     .catch(error => console.log('An error happened:', error));  
// });
Viking.insertMany(data2, (error, viking) => {
    if (error) {
      console.log('An error happened:', error);
      return;
    }
    console.log('The viking is saved and its value is: ', viking);
    Viking.updateOne({ firstName:'Istvan' }, { firstName:'Odin', strength: 10 })
    .then(viking=> console.log('The viking is updated: ', viking))
    .catch(error => console.log('An error happened:', error));

    Viking.find({ name: 'Odin' })
  .then(user => {
    // handle users
    console.log(user)
  })
  .catch(error => {
    // handle error
  });
  });
