const UserModel = require("../models/User");
exports.index = (req, res) => {
    loginData = {}
    loginData.email = (req.cookies.email) ? req.cookies.email : undefined
    loginData.password = (req.cookies.password) ? req.cookies.password : undefined
    res.render("index", {
        title: "Login-Registration",
        message: req.flash('message'),
         message2:req.flash('message2'),
        data: loginData
    })
}

exports.login_user = (req, res) => {
    loginData = {}
    loginData.email = (req.cookies.email) ? req.cookies.email : undefined
    loginData.password = (req.cookies.password) ? req.cookies.password : undefined
    res.render("login", {
        title: "Login-Registration",
        message: req.flash('message'),
        message2:req.flash('message2'),
        data: loginData
    })
}


exports.about = (req, res) => {
    if (req.user) {
        UserModel.find({}, function(err, userDetails) {
            if (!err) {
                res.render("about", {
                    title: "about | Dashboard",
                    data: req.user,
                    details: userDetails
                })
            } else {
                console.log(err);
            }
        })
    }
}

exports.userAuth = (req, res, next) => {
    if (req.user) {
        console.log(req.user);
        next();
    } else {
        console.log(req.user);
        req.flash('message2', "Can not access this page  -- First login then access this page ")
        res.redirect("/");
    }
}

exports.userDashboard = (req, res) => {
    if (req.user) {
        UserModel.find({}, function(err, userDetails) {
            if (!err) {
                res.render("user-dashboard", {
                    title: "User | Dashboard",
                    data: req.user,
                    details: userDetails
                })
            } else {
                console.log(err);
            }
        })
    }
}

exports.logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
}