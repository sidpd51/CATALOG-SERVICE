const express = require("express");
const { PORT } = require("../src/config/serviceConfig");
const v1ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/v1", v1ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server is listening on port: ${PORT}`);
    });
};

setupAndStartServer();
