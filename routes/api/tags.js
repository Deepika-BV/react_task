const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Tag = require("../../models/Tag");

// @route    GET api/tags
// @desc     Get all tags
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/tags
// @desc     post a tag
// @access   Private
router.post("/", async (req, res) => {
  try {
    const tag = await Tag.create({
      name:req.body.name
    });
    res.json(tag);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
