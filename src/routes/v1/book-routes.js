const express = require("express");
const { BookController } = require("../../controllers/index");

const router = express.Router();

router.post("/", BookController.create);
router.get("/:id", BookController.get);
router.get("/", BookController.getAll);
router.delete("/:id", BookController.destroy);
router.patch("/:id", BookController.update);

module.exports = router;
