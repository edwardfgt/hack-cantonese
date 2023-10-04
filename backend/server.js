const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const port = process.env.PORT || 3000;

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
