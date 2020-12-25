const express = require("express");
const asyncHadler = require("express-async-handler");

const {Listing, ExtraPhoto, User, Review, Coordinate} = require("../../db/models")
const router = express.Router();

const avrgRating = (ratings) => {
    const sum = ratings.reduce((acc, rating) => acc+rating.rating, 0)
    return ratings.length ? sum/ratings.length : 5;
}

router.put("/", asyncHadler(async (req, res) => {
    const seller = req.body.user;
    const title = req.body.listingName;
    const description = req.body.listingDescription;
    const priceCents = req.body.price;
    const photo = req.body.photos[0];
    const extraPhotos = req.body.photos.slice(1);
    const {lat, long} = req.body;
    const listing = await Listing.create({seller, title, description, photo, priceCents});
    const coord = await Coordinate.create({listingId: listing.id, latitude: lat, longitude: long});
    extraPhotos.forEach(async photo => await ExtraPhoto.create({listingId: listing.id, photo}));
    return res.json({id:listing.id})
}));

router.get("/:id(\\d+)", asyncHadler(async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const listing = await Listing.findByPk(id,
        {include: [ExtraPhoto, {model:User, include: {model: Review, as: "received", include: {model: User, as:"author"}}}]});
    const json = listing.toJSON();
    json.ExtraPhotos = json.ExtraPhotos.map(e => e.photo);
    json.User.rating = avrgRating(json.User.received)
    return res.json(json);

}));

module.exports = router;
