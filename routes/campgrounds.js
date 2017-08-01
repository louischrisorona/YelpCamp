var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");
//INDEX - get all campgrounds
router.get("/", function(req, res) {
    //get all campgrounds from DB then render
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds:campgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds});
});

router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
});

//CREATE - save a new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){
   // get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var price = req.body.price;
   var author = {
       id: req.user._id,
       username: req.user.username
   };
   var newCampground = {name: name, price: price, image: image, description: desc, author: author};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});
//SHOW
router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err) {
           console.log(err);
       } else {
           res.render("campgrounds/show", {campground: foundCampground});
       }
    });
    //find campground with provided ID
});

//EDIT ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    //is user logged in
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});


//UPDATE ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
   //find and update correct campground and redirect
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect("/campgrounds");
       } else {
           res.redirect("/campgrounds/" + req.params.id);
       }
   });
});

//DESTROY ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");   
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;