const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());


// ============================
// History Questions
// ============================

const questions = [
  {
    id: 1,
    question: "Who founded the Maurya Empire?",
    options: [
      "Ashoka",
      "Chandragupta Maurya",
      "Bindusara",
      "Harsha"
    ],
    answer: "Chandragupta Maurya"
  },
  {
    id: 2,
    question: "In which year did India gain independence?",
    options: [
      "1945",
      "1946",
      "1947",
      "1950"
    ],
    answer: "1947"
  },
  {
    id: 3,
    question: "Who wrote the Arthashastra?",
    options: [
      "Kalidasa",
      "Chanakya",
      "Aryabhata",
      "Tulsidas"
    ],
    answer: "Chanakya"
  }
];

// ============================
// Home Route
// ============================

app.get("/", (req, res) => {
  res.send("History Quiz Backend is Running!");
});

// ============================
// Questions API
// ============================

app.get("/api/questions", (req, res) => {
  res.json(questions);
});

// ============================
// Start Server
// ============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



