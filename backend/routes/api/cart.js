const express = require("express");
const asyncHadler = require("express-async-handler");

const {Cart, User, Listing} = require("../../db/models");

const router = express.Router();

router.post("/", asyncHadler( async (req, res) => {
    const {user, listing, date, participants} = req.body;
    await Cart.create({
        user,
        listing,
        date,
        participants
    })
    res.json({added: true})
}));

router.post("/checkout/", asyncHadler(async (req, res) => {
    const user = req.body.id;
    await Cart.destroy({where: {user}})
    return res.json({success:true});
}))

router.patch("/:id(\\d+)", asyncHadler(async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const {participants, date} = req.body;
    const item = await Cart.findByPk(id,
        {include: {model: Listing, include: User}}
        );
    item.participants = participants;
    item.date = date;
    await item.save()
    res.json({item});

}));

router.get("/:id(\\d+)", asyncHadler(async (req, res) => {
    const user = Number.parseInt(req.params.id);
    const inCart = await Cart.findAll({where: {user},
        include: {model: Listing, include: User}})
    res.json(inCart);
}))

router.delete("/:id(\\d+)", asyncHadler(async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const item = await Cart.findByPk(id);
    await item.destroy();
    res.json({deleted:id});
}))

module.exports = router;
