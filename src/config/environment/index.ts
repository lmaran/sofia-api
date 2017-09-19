// process.env.NODE_ENV = process.env.NODE_ENV || "development";

import * as _ from "lodash";
import * as path from "path";

import developmentConfig from "./development";
// import stagingConfig from "./staging";
// import productionConfig from "./production";
// import testConfig from "./test";

const envConfig = {
    development: developmentConfig
    // staging: stagingConfig,
    // production: productionConfig,
    // test: testConfig
};

// All configurations will extend these options
// ============================================

interface IConfig {
    env: string;
    root: string;
    port: number;
    userRoles: string[];
    secrets: any;
    mongo: any;
    rollbarToken: string;
    gaCode: string;
    externalUrl: string;
}

const common = {
    env: process.env.NODE_ENV || "development",
    mongo: {
        options: {
            db: {
                // safe: true // in Mongo 2.0 this option is "true" by default and is equals to {w:1}
                // details: http://stackoverflow.com/a/14801527
            }
        }
    },
    port: process.env.PORT || 1410,
    rollbarToken: "c40dd41c292340419923230eed1d0d61",
    root: path.normalize(__dirname + "/../../..") // 3 folders back from the current folder

} as IConfig;

const config = _.merge(
    common,
    envConfig[common.env]);

export { IConfig };
export default config;
