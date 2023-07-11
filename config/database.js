const moongoose =require('mongoose');
const { MOONGO_URI } = process.env;

exports.connect =() =>{
    moongoose.connect(MOONGO_URI)
    .then(()=> {
        console.log("Mongo Connected");
    })
    .catch((error)=> {
        console.log("Connection Error");
        console.error(error);
        process.exit(1);
    });
}