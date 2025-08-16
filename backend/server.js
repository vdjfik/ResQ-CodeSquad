const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));




