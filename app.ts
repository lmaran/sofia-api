import * as express from "express";
import config from "./config/environment";
import initialize from "./initialize";

let app: express.Application = express();
app = initialize(app);

const server = app.listen(config.port, () => {
    console.log(`Express server listening on port ${config.port} in ${config.env} mode`);
});

export default server;
