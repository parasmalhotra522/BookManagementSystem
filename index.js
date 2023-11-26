import express  from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.status(200).send("Helll")
})
app.listen(port, ()=>{console.log(`Server is listening at port ${port}`)});