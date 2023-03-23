const router = require("express").Router();
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController");

router.get("/", UserController.index);
router.get("/login",UserController.login_user)
router.get("/about",UserController.userAuth,UserController.about)
router.get("/user-dashboard", UserController.userAuth, UserController.userDashboard);
router.get("/logout", UserController.logout);

module.exports = router;