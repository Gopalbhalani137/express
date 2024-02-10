const mongoose=require('mongoose');
// const dotenv=require('dotenv');
const Movie=require('./../models/moviemodel');
const fs=require('fs');
mongoose
  .connect(
    "mongodb+srv://gopalbhalani137:eN81j7E8vm6OZNto@cluster0.gxhenfw.mongodb.net/cineflex?retryWrites=true&w=majority",
    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }
  )
  .then((conn) => {
    console.log("DB successful");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
  const movies=JSON.parse(fs.readFileSync('./data/data.json','utf-8'));
  //delete existing data at mongodb compass
  const deletemovies=async()=>{
    try{
       await Movie.deleteMany();
        console.log('data deleted');
    }
    catch(err){
        console.log(err.message);
    }
    process.exit();
  }
  //import movie from data.json file
  const importmovies=async()=>{
    try{
       await Movie.create(movies);
        console.log('data imported');
    }
    catch(err){
        console.log(err.message);
    }
    process.exit();
  }
if(process.argv[2]==='--import'){
    importmovies();
}
if(process.argv[2]==='--delete'){
    deletemovies();
}