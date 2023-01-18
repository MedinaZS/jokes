const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: "Something went wrong 1", error: err }));
};

module.exports.findOneJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then(oneJoke => res.json({ joke: oneJoke }))
    .catch(err => res.json({ message: "Something went wrong 2", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => res.json({ user: newJoke }))
    .catch(err => res.json({ message: "Something went wrong 3", error: err }));
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong 4", error: err }));
};

module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong 5", error: err }));
};

module.exports.findRandomJoke = (req, res) => {

  // Get the count of all jokes
  Joke.count().exec((err, count) => {
    // Get a random entry
    var random = Math.floor(Math.random() * count);

    Joke.findOne().skip(random)
      .then(randomJoke => res.json({ joke: randomJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  })
};
