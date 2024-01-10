const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Aplicacion corriendo en puerto:" + PORT);
});
