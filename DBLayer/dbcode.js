var monk = require('monk');

//Connect with my-shop database db
var db = monk('localhost/my-shop');

//console.log(db);


//Connect with my-shop databse table user
var userResult = db.get("users");

//console.log(userResult);


module.exports = class DBLayer{

    SelectAll(){
        userResult.findOne({}).then((data) => {
            console.log(data);
        })
    }

    SelectAllWithPromise(){
            return userResult.findOne({});
    }
    
    Insert(info){
        userResult.insert(info);
    }

    Update(info,where){
        userResult.update(where,info);
    }

    Delete(where){

    }
}

//var db = new DBLayer;

//var result = db.SelectAll();



//console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');

