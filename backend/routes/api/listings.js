const express = require("express");
const asyncHadler = require("express-async-handler");

const {Listing} = require("../../db/models")
const router = express.Router();

router.get("/:id(\\d+)", asyncHadler(async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const listing = await Listing.findByPk(id);
    return res.json(listing.toJSON());
}))

module.exports = router;
