var mongoose = require("mongoose");


var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   author:{
     id:{
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
     },
     username: String
   },
   comments:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
       ]
});

// var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Yellowknife", 
//         image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg",
//         description: "No bathrooms, no water, beautiful granite!"
        
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Newly created campground: ");
//             console.log(campground);
//         }
//     });

module.exports = mongoose.model("Campground", campgroundSchema);
