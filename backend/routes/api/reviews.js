const express = require("express");

const {Review} = require("../../db/models");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.post("/", asyncHandler(async (req, res) => {
    const newReview = await Review.create(req.body);
    res.json({done:true, newReview})
}))

module.exports = router;
