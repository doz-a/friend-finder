var friends = require("../app/data/friends.js")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        // Empty variable that will hold best match's name and photo to push to survey modal
        var bestMatch = {
            name: "",
            photo: "",
            scoreDifference: 100
        }
        var userData = req.body;
        var userScores = userData.scores;
        var difference = 0;


        for (let i = 0; i < friends.length; i++) {
            const element = friends[i];
            var difference = 0;
            console.log(element.name);
            for (let j = 0; j < element.scores.length; j++) {
                const scores = element.scores[j];
                var userScore = userScores[j];

                // Creates a total difference by subtracting scores of user from scores of each friend 
                difference += Math.abs(parseInt(scores) - parseInt(userScore))
            }

            // Best Match -> survey modal in survey html
            if (bestMatch.scoreDifference > difference) {
                bestMatch.name = element.name;
                bestMatch.photo = element.photo;
                bestMatch.scoreDifference = difference
            }
        }
        friends.push(userData);
        res.json(bestMatch);
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