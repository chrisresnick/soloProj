const express = require("express");
const asyncHadler = require("express-async-handler");

const {Listing, ExtraPhoto} = require("../../db/models")
const router = express.Router();

router.get("/:id(\\d+)", asyncHadler(async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const listing = await Listing.findByPk(id,
        {include: ExtraPhoto});
    const json = listing.toJSON();
    json.ExtraPhotos = json.ExtraPhotos.map(e => e.photo);
    return res.json(json);

}))

module.exports = router;
