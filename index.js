const express = require("express");
const bodyparser = require("body-parser");

const app = express();

const PORT = 4000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>SELAMAT DATANG DI API BENEFIDE");
});

const { employeeRouters, functionRouters } = require("./router");

app.use("/api", employeeRouters);
app.use("/api", functionRouters);

app.listen(PORT, () => console.log(`API JALAN Di PORT ${PORT}`));
