require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const app = express();
app.use(logger);
app.use(cors(corsOptions));

//assign port
const PORT = process.env.PORT || 5000;

//register routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const entrysRouter = require("./routes/entrys");

//connect through mongoose
const { mongooseConnect } = require("./mongoose");
mongooseConnect();
const mongoose = require("mongoose");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//allow access to static files
app.use(express.static(path.join(__dirname, "public")));

//register routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("./entrys", entrysRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.use(errorHandler);

//start the express server
app.listen(PORT, () => {
  console.log(`Express server is running on port: ${PORT}`);
});

module.exports = app;