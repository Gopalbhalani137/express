const Movie = require("./../models/moviemodel");
const APIFeatures = require("./../utils/ApiFeatures");
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({
        status: "fail",
        message: "Movie not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
exports.getmovies = async (req, res) => {
  try {
    const features = new APIFeatures(Movie.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const movies = await features.query;
    res.status(200).json({
      status: 'success',
      data: movies,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.patchapi = async (req, res) => {
  try {
    const updatedmovies = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, newValidators: true }
    );
    res.status(201).json({
      status: "success",
      data: {
        updatedmovies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.deleteapi = async (req, res) => {
  try {
    const deletemovies = await Movie.findByIdAndDelete(req.params.id, {
      new: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        deletemovies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.postapi = async (req, res) => {
  // const testMovie=new Movie({});
  // testMovie.save();
  try {
    ////////////for async await use try catch methord
    const movie = await Movie.create(req.body);
    // console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
