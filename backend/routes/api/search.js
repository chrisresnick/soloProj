const express = require("express");
const sw = require("stopword");
const asyncHandelr = require("express-async-handler");
const Op = require("sequelize").Op;

const {Listing, User} = require("../../db/models/index");

const router = express.Router();

function countOccur(str, subString) {
	let count = 0;
	let indexOfSub = str.indexOf(subString);
	while (indexOfSub != -1) {
		count++;
		indexOfSub = str.indexOf(subString, indexOfSub + subString.length);
	}
	return count;
}

router.post("/", asyncHandelr(async (req, res) => {
    const searchTerm = req.body.searchTerm.trim();
    if(searchTerm.length === 0) return res.json([]);
    const words = sw.removeStopwords(searchTerm.split(" "));
    if(words.length === 0) return res.json([]);
    const re = words.map((word) => `%${word}%`);
    const results = {};
    for(let term of re){
        let listings = await Listing.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.iLike]: term } },
                    { description: { [Op.iLike]: term } },
                ],
            },
            include: [User],
        });
        listings.forEach(listing => {
            if(!(listing.id in results)){
                results[listing.id] = {count:0, listing: listing.toJSON()};
            }
            results[listing.id].count += countOccur(listing.description, term.substring(1, term.length - 1));
            results[listing.id].count += 3*countOccur(listing.title, term.substring(1, term.length - 1));
        });
    }
    const releventListings = Object.keys(results);
    console.log(results[releventListings[0]]);
    if(releventListings.length === 0) return res.json([]);
    releventListings.sort((a, b) => {
        const aVal = results[a].count;
        const bVal = results[b].count;
        if (aVal === bVal) return 0;
        return aVal > bVal ? -1 : 1;
    });
    const listings = releventListings.map((l) => results[l].listing);
    res.json(listings);
}))


module.exports = router;
