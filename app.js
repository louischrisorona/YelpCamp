const express = require("express"),
    path = require("path"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    localStrategy = require("passport-local"),
    passport = require("passport"),
    User = require("./models/user"),
    methodOverride = require("method-override"),
    flash = require("connect-flash"),
    seedDB = require("./seeds");

//requiring routes    
var campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes    = require("./routes/comments"),
    authRoutes       = require("./routes/index");
    
var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp_v14";
mongoose.connect(url);
// mongoose.connect("mongodb://Chris:Sirs5s3r!@ds127993.mlab.com:27993/yelpcamp_tfp33184");

mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "Olivia loves Disneyland!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", authRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelp Camp server is running...");
});