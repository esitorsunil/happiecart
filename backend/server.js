const app = require("./App");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const path = require("path");

dotenv.config({ path:path.join(__dirname,"/config/config.env") });

connectDatabase();

app.listen(process.env.PORT, () => {    
    console.log(`My Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);            
});