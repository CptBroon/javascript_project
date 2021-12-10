const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors())

app.listen(5000, function() {
    console.log(`Educational server running on port ${this.address().port}`);
  });