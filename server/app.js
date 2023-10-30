const express = require("express");
const morgan = require("morgan");
const ejsMate = require("ejs-mate");

const path = require("path");
const destinationsRouter = require("./routes/destinationRoutes");
const reviewsRouter = require("./routes/reviewsRoutes");

const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// server listening
const port = process.env.PORT;

const getHome = async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message
    });
  }
};

//  route
app.get("/", getHome);
app.use("/api/v1/destinations", destinationsRouter);
app.use("/api/v1/reviews", reviewsRouter);

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found", 404);
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
