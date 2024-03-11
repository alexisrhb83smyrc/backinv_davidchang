const express = require("express");
const app = express();
const routes = require("./routes");
const swagger = require("./swagger");

app.use(express.json());
app.use("/api", routes);
swagger(app);

app.all("*", (req, res) => {
  res.status(404).send("Invalid Url, go to api-docs/ for more info :)");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
