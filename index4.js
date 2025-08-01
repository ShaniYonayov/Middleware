import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({extended:true}));

function bandNameGenerator(req, res, next){
  console.log("Data from the form:", req.body);
  //if(req.body.street && req.body.pet){
    bandName = req.body.street + req.body.pet;
  //}else{
  //  bandName = "No name generated (missing street or pet)";
  //}
  next();
}

app.use(bandNameGenerator);

app.post("/submit", (req, res) => {
   console.log(req.body);
   console.log(bandName);
   //bandName = req.body["street"] + req.body.["pet"];
   res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});







app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
