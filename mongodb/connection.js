const mongoose = require("mongoose");
const { todoSchema } = require("./schemas/schema");
require("dotenv").config({ path: `${__dirname}/../.env.development` });

mongoose.connect(`${process.env.MONGODB_URL}`);

module.exports = mongoose.connection;
