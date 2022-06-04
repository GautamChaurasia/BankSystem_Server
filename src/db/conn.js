const mong = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const db = process.env.ATLAS_DB_STR;

const conndb = async()=>{
try{
    await mong.connect(db, {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    });
    console.log(`Connected to Database successfully`);
    } catch(e){
        console.log(`Could not connect to database`);
        }
};

conndb();