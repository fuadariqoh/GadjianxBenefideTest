// const { Router } = require("express");
const express = require("express");
const { functionControllers } = require("../controllers");
const router = express.Router();

router.post("/reverse", functionControllers.reverseCharacter);
router.post("/fibonacci", functionControllers.fibonacci);
router.post("/combination", functionControllers.combination);

module.exports = router;
