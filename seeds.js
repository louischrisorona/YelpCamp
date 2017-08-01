var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
    {
        name: "Cloud's Rest",
        image: "http://photosforclass.com/download/11407596925",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sapien ex, in dignissim lectus mattis sit amet. Nullam sed nibh non ipsum venenatis iaculis ac a lacus. Praesent libero eros, dignissim eu tempus vitae, rhoncus in neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id congue nisl. Phasellus lobortis elementum diam vitae dapibus. Mauris tincidunt, libero quis pretium lobortis, dolor eros malesuada felis, ac gravida dolor eros id nibh."
    },
    {
        name: "Hail's View",
        image: "http://photosforclass.com/download/5391759757",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sapien ex, in dignissim lectus mattis sit amet. Nullam sed nibh non ipsum venenatis iaculis ac a lacus. Praesent libero eros, dignissim eu tempus vitae, rhoncus in neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id congue nisl. Phasellus lobortis elementum diam vitae dapibus. Mauris tincidunt, libero quis pretium lobortis, dolor eros malesuada felis, ac gravida dolor eros id nibh."
    },
    {
        name: "Snowy Basecamp",
        image: "http://photosforclass.com/download/8265812638",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sapien ex, in dignissim lectus mattis sit amet. Nullam sed nibh non ipsum venenatis iaculis ac a lacus. Praesent libero eros, dignissim eu tempus vitae, rhoncus in neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id congue nisl. Phasellus lobortis elementum diam vitae dapibus. Mauris tincidunt, libero quis pretium lobortis, dolor eros malesuada felis, ac gravida dolor eros id nibh."
    }
    ];
    
function seedDB (){
    //Remove all  campgrounds
    Campground.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     } else {
    //     console.log("Removed campgrounds!");
    //     }
    //     data.forEach(function(seed){
    //     Campground.create(seed, function(err, campground){
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             console.log("Added a campground");
    //             Comment.create({text: "This place is great.", author: "Homer"}, function(err, comment){
    //                 if(err){
    //                     console.log(err);
    //                 } else {
    //                 campground.comments.push(comment);
    //                 campground.save();
    //                 console.log("Created new comment");
    //                 }
    //             });
    //         }
    //         });
    // });
});
    //add a few campgrounds
  
    //add a few comments
}

module.exports = seedDB;