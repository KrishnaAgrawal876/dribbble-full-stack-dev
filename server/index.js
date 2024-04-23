// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(
  `mongodb+srv://krishna:ccadWmrEKB0UFxVx@krishna.2j2oawh.mongodb.net/mydb`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Define a schema for your MongoDB collection
const userSchema = new mongoose.Schema({
  name: String,
  userName: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Route to retrieve all data from the database
app.get("/api/users", async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find();
    // Send the users data as the response
    res.status(200).json(users);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Routes
app.post("/api/users", async (req, res) => {
  try {
    const { name, userName, email, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create new user
    const newUser = new User({ name, userName, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Define an endpoint to send emails
app.post("/api/send-email", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "krishnaagrawal876@gmail.com",
      pass: "zzme pfvr lqmt zzzw",
    },
  });

  const mailOptions = {
    from: "krishnaagrawal876@gmail.com",
    to: req.body.email,
    subject: "About Dribbble account creation",
    text: "Congratulations! Your account has been successfully created. Welcome to our community!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
