const express = require("express");
const asyncHadler = require("express-async-handler");

const {Listing, ExtraPhoto, User, Review} = require("../../db/models")
const router = express.Router();

const avrgRating = (ratings) => {
    const sum = ratings.reduce((acc, rating) => acc+rating.rating, 0)
    return ratings.length ? sum/ratings.length : 5;
}

router.get("/:id(\\d+)", asyncHadler(async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const listing = await Listing.findByPk(id,
        {include: [ExtraPhoto, {model:User, include: {model: Review, as: "received"}}]});
    const json = listing.toJSON();
    json.ExtraPhotos = json.ExtraPhotos.map(e => e.photo);
    json.User.rating = avrgRating(json.User.received)
    return res.json(json);

}))

module.exports = router;
