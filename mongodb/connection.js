const mongoose = require("mongoose");

require("dotenv").config({ path: `${__dirname}/../.env.development` });

mongoose.connect(`mongodb://127.0.0.1:27017/testDB`);
// mongoose.connect(`${process.env.MONGODB_URL}`);

module.exports = mongoose.connection;
