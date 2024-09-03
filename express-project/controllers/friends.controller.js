const model = require('../models/friends.model');

function getFriends(req, res) {
    res.json(model);
};

function postFriend(req, res) {
    if (!req.body.name) {
        res.status(400).json({
            error: 'Missing friend name'
        });
        return;
    } 

    const newFriend = {
        id: model.length,
        name: req.body.name,
    };
    model.push(newFriend);
    res.json(newFriend);
};

function getFriend(req, res)  {
    const friendId = req.params.friendId;
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
};


module.exports = {
    getFriends,
    getFriend,
    postFriend,
}