const axios = require('axios');

const hostname = 'localhost'
const PORT = '3000'

const data = {
  title: 'New Post Title',
  content: 'New Post Content'
};

axios.post(`http://${hostname}:${PORT}/posts`, data)
  .then(response => {
    console.log(`Post created successfully: ${response.data}`);
  })
  .catch(error => {
    console.error(`Error creating post: ${error}`);
  });
