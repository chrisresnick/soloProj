const express = require("express");
const asyncHadler = require("express-async-handler");
const { Model } = require("sequelize/types");

const {Cart, User, Listing} = require("../../db/models");

const router = express.Router();

router.post("/", asyncHadler((req, res) => {
    const {user, listing, date, participants} = req.body;
    await Cart.create({
        user,
        listing,
        date,
        participants
    })
    res.json({added: true})
}));

module.exports = router;
