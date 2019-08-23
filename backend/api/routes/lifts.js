var express = require('express');
var router = express.Router();
var config = require('../db_config');

var mysql = require('mysql')
var connection = mysql.createConnection(config)


router.post('/benchmax', function(req,res){
    var max = parseInt(req.body.benchm);
    connection.query('INSERT INTO maxBench (bench) VALUES ('+max+')', function(err,result){
        if (err) throw err;
        console.log("one record inserted");
    });

  });

  router.post('/ohpmax', function(req,res){
    var max = parseInt(req.body.ohpm);
    connection.query('INSERT INTO maxOhp (ohp) VALUES ('+max+')', function(err,result){
        if (err) throw err;
        console.log("one record inserted");
    });

  });

  router.post('/dliftmax', function(req,res){
    var max = parseInt(req.body.dliftm);
    connection.query('INSERT INTO maxDlift (dlift) VALUES ('+max+')', function(err,result){
        if (err) throw err;
        console.log("one record inserted");
    });

  });

  router.post('/squatmax', function(req,res){
    var max = parseInt(req.body.squatm);
    connection.query('INSERT INTO maxSquat (squat) VALUES ('+max+')', function(err,result){
        if (err) throw err;
        console.log("one record inserted");
    });

  });

  router.post('/bbrowmax', function(req,res){
    var max = parseInt(req.body.bbrowm);
    connection.query('INSERT INTO maxBbrow (bbrow) VALUES ('+max+')', function(err,result){
        if (err) throw err;
        console.log("one record inserted");
    });

  });

  router.post('/body', function(req,res){
    var max = parseInt(req.body.bodyw);
    connection.query('INSERT INTO bodyweight (weight) VALUES ('+max+')', function(err,result){
        if (err) throw err;
        console.log("one record inserted");
    });

  });

  module.exports = router;