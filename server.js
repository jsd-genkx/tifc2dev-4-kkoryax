const express = require();
const app = express();

const hostname = 'localhost'
const PORT = '3000'

//create middleware for parse JSON
app.use(express.json())

let posts = [];

app.get("/", (req, res) => {
  console.log("Express API is running...")
})

app.listen(PORT, () => {
  console.log(`Server start running on http://${hostname}:${PORT}`)
});
