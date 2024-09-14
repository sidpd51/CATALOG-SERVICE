const express = require("express");
const { PORT } = require("../src/config/serviceConfig");

const setupAndStartServer = async () => {
    const app = express();
    app.listen(PORT, async () => {
        console.log(`Server is listening on port: ${PORT}`);
    });
};

setupAndStartServer();
