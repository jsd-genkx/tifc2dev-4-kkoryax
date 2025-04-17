const express = require('express');
const app = express();

const hostname = 'localhost'
const PORT = '3000'

//create middleware for parse JSON
app.use(express.json());

let posts = [];

app.get("/", (req, res) => {
  res.send("Express API is running...")
});

app.get("/post", (req, res) => {
  res.json(posts)
});

app.post("/post", (req, res) => {
  const {title , content} = req.body
  const newPost = {
    id: posts.length + 1,
    title: title,
    content: content
  };
  posts.push(newPost);

  res.status(200).json(newPost);
});

app.listen(PORT, () => {
  console.log(`Server start running on http://${hostname}:${PORT}`)
});
