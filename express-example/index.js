const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      name: "Ankit",
      useCase: "sample-api",
      email: "ankittrehan2000@gmail.com",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
