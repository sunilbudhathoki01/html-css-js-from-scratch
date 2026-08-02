const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use(express.static('public'))


app.get("/api/resource", (req, res) => {
console.log('headers')
console.log(req.header)
res.json({
    message:'hello world!',
    description:'This is the demo of content negotiations'
})
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});