const reverse = require("../function/reverse");
const fibonacci = require("../function/fibonacci");
const combinationAndPermutation = require("../function/combination");

const { db } = require("../connection");

module.exports = {
  reverseCharacter: (req, res) => {
    const { character } = req.body;
    let result = reverse(character);
    res.status(200).send({ result: result });
  },
  fibonacci: (req, res) => {
    const { n } = req.body;
    let result = fibonacci(n);
    res.status(200).send({ result: result });
  },
  combination: (req, res) => {
    const { n, r } = req.body;
    let result = combinationAndPermutation(n, r);
    res.status(200).send({ result: result });
  },
};
