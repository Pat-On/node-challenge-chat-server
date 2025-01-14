const express = require("express");
const cors = require("cors");

const messageRouter = require("./routes/messageRoute");

const app = express();

app.use(cors());

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!",
};
const welcomeMessage1 = {
  id: 1,
  from: "Bart1",
  text: "Welcome to CYF chat system!1",
};
const welcomeMessage2 = {
  id: 2,
  from: "Bart2",
  text: "Welcome to CYF chat system!2",
};
const welcomeMessage3 = {
  id: 3,
  from: "Bart3",
  text: "Welcome to CYF chat system!3",
};

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [
  welcomeMessage,
  welcomeMessage1,
  welcomeMessage2,
  welcomeMessage3,
];
app.use(express.json());
app.use((req, res, next) => {
  next();
});

//Routes
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.use("/api/messages", messageRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening ${port}`);
});

exports.messages = messages;
