const express = require("express");

const app = express();

const PORT = 3000;

const dashboardRoutes = require("./routes/dashboard.routes");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
