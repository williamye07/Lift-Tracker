var express = require('express');
var router = express.Router();
var config = require('../db_config');

var mysql = require('mysql')
var connection = mysql.createConnection(config)

router.get('/bench', function(req,res){
    connection.query("SELECT bench FROM maxBench",function(err,result){
        if (err) throw err;
        console.log(result)
        res.send(result);
    });
});

router.get('/bbrow', function(req,res){
  connection.query("SELECT bbrow FROM maxBbrow",function(err,result){
      if (err) throw err;
      console.log(result)
      res.send(result);
  });
});

router.get('/dlift', function(req,res){
  connection.query("SELECT dlift FROM maxDlift",function(err,result){
      if (err) throw err;
      console.log(result)
      res.send(result);
  });
});

router.get('/ohp', function(req,res){
  connection.query("SELECT ohp FROM maxOhp",function(err,result){
      if (err) throw err;
      console.log(result)
      res.send(result);
  });
});

router.get('/squat', function(req,res){
  connection.query("SELECT squat FROM maxSquat",function(err,result){
      if (err) throw err;
      console.log(result)
      res.send(result);
  });
});

router.get('/weight', function(req,res){
  connection.query("SELECT weight FROM bodyweight",function(err,result){
      if (err) throw err;
      console.log(result)
      res.send(result);
  });
});

module.exports = router;