const express = require('express');

const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ exteneded: true }));

app.use(express.static("public"));

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is runnig on http://localhost:${PORT}`)
})