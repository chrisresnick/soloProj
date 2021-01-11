const express = require("express");
const asyncHadler = require("express-async-handler");

const {Listing, ExtraPhoto, User, Review, Coordinate} = require("../../db/models")
const router = express.Router();

const avrgRating = (ratings) => {
    const sum = ratings.reduce((acc, rating) => acc+rating.rating, 0)
    return ratings.length ? sum/ratings.length : 5;
}

router.put("/", asyncHadler(async (req, res) => {
    const errors = [];
    const seller = req.body.user;
    if(!seller) errors.push("The seller id is required");
    const title = req.body.listingName;
    if(!title.length) errors.push("The title is required.");
    if(title && title.length > 150) errors.push("The title must be 150 chars or shorter.");
    const description = req.body.listingDescription;
    if(!description.length) errors.push("The description is required.");
    const priceCents = req.body.price;
    if(!priceCents) errors.push("The price is required.");
    const photo = req.body.photos[0];
    if(!photo) errors.push("At least one photo is required.")
    const extraPhotos = req.body.photos.slice(1);
    const {lat, long} = req.body;
    if(!lat || !long) errors.push("Lat and Long must be provided");
    if(errors.length) return res.json({errors})
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
