const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and started at http://localhost:${PORT}`);
});





