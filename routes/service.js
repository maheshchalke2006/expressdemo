//import { request } from 'http';

var express = require('express');
var router = express.Router();

var db = require('../DBlayer/DBcode');
var dbObj = new db();
console.log(dbObj);


/* GET users listing. */
router.get('/api/employee', function(req, res, next) {
  //res.send('respond with a resource');
  dbObj.SelectAll();
  console.log('hererer ');
}); 

/*router.get('/api/employee', function(req, res, next) {
  //res.send('respond with a resource');
  dbObj.SelectAll((data) => {
    res.josn(data); //HTML
  }
  );
});*/

router.get('/api/employeewithpromise', function(req, res, next) {
  //res.send('respond with a resource');
  dbObj.SelectAllWithPromise().then((data)=>{
    res.json(data);
  });

});

//insert
router.get('/api/employee', function(req, res, next) {
  res.send('respond with a resource');
});

//update
router.get('/api/employee', function(req, res, next) {
  res.send('respond with a resource');
});

//delete
router.get('/api/employee', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
