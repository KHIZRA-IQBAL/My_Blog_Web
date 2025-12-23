require('dotenv/config');
const express = require('express');
const cors = require('cors');
const { connectMongoDb } = require('./db/connection');

const app = express();

app.use(cors());
app.use(express.json());

connectMongoDb(process.env.MONGO_URI);

app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/posts', require('./routes/post.route'));

app.get('/', (req, res) => {
  res.json({ message: 'Blog API Running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on ${PORT}`));