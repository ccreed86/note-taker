const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ exteneded: true }));

app.use(express.static("public"));



// Optimize




app.listen(PORT, () => {
    console.log(`Server is runnig on http://localhost:${PORT}`)
})