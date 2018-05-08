//turn to a universal javascript
import express from "express";
import renderer from "./helpers/renderer";

const app = express();
app.use(express.static("public"));

//handle the root get request
app.get("*", (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
