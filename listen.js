const app = require("./app");
const db = require("./mongodb/connection");

const { PORT = 9090 } = process.env;

db.once("open", () => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
});
