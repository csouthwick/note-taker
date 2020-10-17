const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();

// parse incomping string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
