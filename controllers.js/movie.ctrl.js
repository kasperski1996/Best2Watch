const express = require('express');
const dal = require('../data/DAL');
const app = express();
const PORT = 3001;
const uuidv4 =require('uuid').v4
const movieCtrl=express.Router()
movieCtrl.post('/', function (req, res) {
    const movie={
        "Movie_ID": {
            "id?": uuidv4(),
            "name":req.body['name'],
           // "picture" : req.body['picture-url'],
            "director":req.body['director name'],
            "date": req.body['date'],
            "rating":req.body['rating'] ,
            "isSeries":req.body['isSeries'],
            "series_details":req.body['series_details'], // array length is number of seasons, the value represents the number of chapter in each season.
            "actors": {
              "actor_1_name": {
                "name?":req.body['actor_1_name'],
                "picture": req.body['actor_url'],
                "site": req.body['actor_url']
              },
              "actor_2_name": {
                "name?":req.body ['actor_2_name'],
                "picture":req.body[ 'actor_2_url'],
                "site":req.body['actor_2_url']
              }
            }
          }

        }
        dal.add('movie',movie);
       // const movieValue=Object.values(movie);

       res.status(201).send(movie)
    })

    module.exports=movieCtrl;
