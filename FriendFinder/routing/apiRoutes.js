var friends = require("../app/data/friends.js")
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // Displays a single character, or returns false
    app.get("/api/characters/:character", function (req, res) {
        var chosen = req.params.character;

        console.log(chosen);

        for (var i = 0; i < characters.length; i++) {
            if (chosen === characters[i].routeName) {
                return res.json(characters[i]);
            }
        }

        return res.json(false);
    });
}