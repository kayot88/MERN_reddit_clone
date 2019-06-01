const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const authRoutes = require('./routes/auth');
require('dotenv').config({ path: '.env' });
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log(`connected to database`);
  })
  .catch(() => {
    console.log(`error connected to database`);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`);
});
