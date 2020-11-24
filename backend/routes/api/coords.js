const express = require("express");
const asyncHadler = require("express-async-handler");

const {Coordinate, Listing, User} = require("../../db/models/index");

const router = express.Router();

router.get("/", asyncHadler(async (req, res) => {
    const coords = await Coordinate.findAll({include: {model: Listing, include:User}})
    res.json(coords);
}));

module.exports = router;
