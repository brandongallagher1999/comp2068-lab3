var express = require('express');
var router = express.Router();
let ejs = require("ejs");
let fs = require("fs");

/* GET home page. */
router.get('/:member', function(req, res, next) {
  if (req.params.member == "sherry")
  {
    let desc = "Sherry is wonderful cook and mom that loves to grow various plants in her garden.";
    res.render("pages/header", { description : desc});
  }
  else if (req.params.member == "marc")
  {
    let desc = "Marc is french canadian that loves Hockey and to do renovations on the weekend.";
    res.render("pages/header", { descrption : desc});
  }
  else if (req.params.member == "brandon")
  {
    let desc = "Brandon is a software developer that loves to learn new things in software development and likes to learn and talk about political and socioeconomic ideas.";
    res.render("pages/header", { description : desc});
  }
  
});

module.exports = router;
