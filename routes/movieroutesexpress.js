const express=require('express');
const moviecontroller=require('../controllers/moviecontroller.js');
const router = express.Router();
router.route("/")
.get(moviecontroller.getmovies)
.post(moviecontroller.postapi);

router.route("/:id")
.get(moviecontroller.getMovieById)
.patch(moviecontroller.patchapi)
.delete(moviecontroller.deleteapi);
router.route("/api/movies");
module.exports=router;