const path = require('path')
const friendData = require("../data/friends.js");

module.exports = function (app) {
  
  app.get("/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/friends", function(req, res) {
    
    let fInput = req.body;
    let fResponse = fInput.scores;
    
    var matchName = ''
    var matchImage = ''
    var tDiff = 100

    for (let i = 0; i < friendData.length; i++) {
      let diff = 0
      for (let j=0; j < fResponse.length; j++) {
            diff += Math.abs(friendData[i].scores[j] - fResponse[j])
        }
      if (diff < tDiff) {
        tDiff = diff
        matchName = friendData[i].name;
        matchImage = friendData[i].photo;               
      }
    }

    friendData.push(fInput);
    res.json({status: 'OK,', matchName: matchName, matchImage: matchImage})
   
  });
  };