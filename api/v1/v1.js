const express = require ("express");
const router = express.Router();

const registerRoute = require(`${ global.paths.v1.routes.register }`);
const resendVerificationMailRoute = require(`${ global.paths.v1.routes.resendVerificationMail }`);
const verifyEmailRoute = require(`${ global.paths.v1.routes.verifyEmail }`);

router.use("/register", registerRoute);
router.use("/resendVerificationMail", resendVerificationMailRoute);
router.use("/verifyEmail/", verifyEmailRoute);

module.exports = router;
