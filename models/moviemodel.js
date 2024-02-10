
//////////////////////////////////CONNECT DATA TO CLUSTER database USING MONGODB/////////////////////
const mongoose = require('mongoose');
  const movieSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true,
      unique:true,
      trim:true
    },
    description:{
      type:String,
      required:[true,'description is required'],
      trim:true
    },
    duration:Number,
    ratings:{
      typr:Number
    },
    totalrating:{
      type:Number
    },
    releaseyear:{
      type:Number
    },
    releasedate:{
      type:Date
    },
    createdat:{
      type:Date,
      default:Date.now()
    },
    genres:{
      type:[String],
      required:[true,'genres are required']
    },
    directors:{
      type:[String],
      required:[true,'directors are required']
    },
    coverimage:{
      type:[String],
      required:[true,'coverimage are required']
    },
    price:{
      type:Number
    }
  });
  const Movie=mongoose.model('Movie',movieSchema);
  module.exports=Movie;