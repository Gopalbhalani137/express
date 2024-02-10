const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const morgan=require('morgan');
const moviesrouter = require("./routes/movieroutesexpress");
app.use(express.json());
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
// app.use(morgan());
////
// app.get('/',(req,res)=>{
//     res.status(200).send('hello guys how are you')//.send is used for content-type text/html
//     res.status(200).json({message:'hello.....',status:200});//for application/json type
// })
// app.get('/api/movies',getmovie);
// ///GET REQUEST ON WEB-API ON /api/movies/ID
// app.get('/api/movies/:id',getmovies);
// app.patch('/api/movies/:id',patchapi);
// app.delete('/api/movies/:id',deleteapi);
// //////POST REQUEST ON WEB-API
// app.post('/api/movies',postapi);
// app.use(function (req, res, next) {
//     console.log("Middleware called")
//     res.send("g")
//     next();
// });
app.use("/api/movies", moviesrouter); // USE FOR EVENTS ON DATA USING EXPRESS
const port = 3000;
app.listen(port, () => {
  console.log("server has been started");
});
module.exports = app;
