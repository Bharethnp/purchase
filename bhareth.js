const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// allows to easily process post request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/purchase", async (req, res) => {
  console.log(req.body);
});
const PORT = 9647;
app.listen(PORT, () => {
  console.log("Slack Bot Server Has Started On Port " + PORT);
});
