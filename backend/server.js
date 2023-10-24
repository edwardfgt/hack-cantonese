const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");
const port = process.env.PORT || 3000;
const cors = require("cors");
const { mongoConnect } = require("./services/mongo");
const { logger } = require("./middleware/logger");

app.use(logger);

app.use(cors({ origin: "http://localhost:8080" }));
app.use(express.json());

app.use("/user", userRoutes);
// app.use("/auth", authRoutes);

mongoConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
