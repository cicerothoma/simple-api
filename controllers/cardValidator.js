const _ = require("lodash");

module.exports = (req, res, next) => {
  const card = { ...req.body };
  console.log(card);
  if (
    _.has(card, "creditCardNumber", "cardHolder", "expirationDate", "amount")
  ) {
    res.json(card);
  } else {
    next(new Error("Card is Invalid"));
  }
};
