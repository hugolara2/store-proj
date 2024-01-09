const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./src/Routes/index');

routerApi(app);

app.listen(port, () => {
    console.log(`My port at ${port}`);
});

