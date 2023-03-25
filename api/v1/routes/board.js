const express = require("express");
const router = express.Router();

const postController = require(`${ global.paths.v1.controllers.board }/post`);
const putController = require(`${ global.paths.v1.controllers.board }/put`);
const deleteController = require(`${ global.paths.v1.controllers.board }/delete`);
const getController = require(`${ global.paths.v1.controllers.board }/get`);

const postValidator = require(`${ global.paths.v1.validators.board }/post`);
const putValidator = require(`${ global.paths.v1.validators.board }/put`);
const deleteValidator = require(`${ global.paths.v1.validators.board }/delete`);
const getValidator = require(`${ global.paths.v1.validators.board }/get`);

const isAuthorized = require(`${ global.paths.v1.validators.isAuthorized }`);

router.post("/", isAuthorized, postValidator, postController);
router.put("/", isAuthorized, putValidator, putController);
router.delete("/:id", isAuthorized, deleteValidator, deleteController);
router.get("/:id", isAuthorized, getValidator, getController);

module.exports = router;