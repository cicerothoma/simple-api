module.exports = (req, res, next) => {
  const allowedKeys = [
    "creditCardNumber",
    "cardHolder",
    "expirationDate",
    "amount",
  ];
  const card = { ...req.body };
  const cardKeys = Object.keys(card);

  cardKeys.splice(
    cardKeys.findIndex((val) => val === "securityCode"),
    1
  );
  if (cardKeys.every((val) => allowedKeys.includes(val))) {
    res.json(card);
  } else {
    next(new Error("Card is Invalid"));
  }
};
