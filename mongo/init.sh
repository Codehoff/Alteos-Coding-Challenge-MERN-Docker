#!/bin/sh
mongoimport --collection employees --file data.json --jsonArray --uri "mongodb://mongo:27017"