const express = require("express");
const app = express();

const destinationsRouter = require("./routes/destinationRoutes");
app.set("view engine", "ejs");
// server listening
const port = 3003;

const getHome = async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
//  route
app.get("/", getHome);
app.use("/api/destinations/v1", destinationsRouter);

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
