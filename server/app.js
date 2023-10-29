const express = require("express");
const morgan = require("morgan");

const path = require("path");
const destinationsRouter = require("./routes/destinationRoutes");

const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
const ejsMate = require("ejs-mate");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));

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
app.use("/api/v1/destinations", destinationsRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
