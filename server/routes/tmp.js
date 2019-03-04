var express = require('express');
var router = express.Router();

/** get data */
router.get("/getCreativeSets", function (req, res) {
  res.send('data from be');
});

module.exports = router;
