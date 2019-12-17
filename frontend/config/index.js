import common from "./common.json";
import local from "./local.json";
import production from "./production.json";

const config = {
  local: {
    ...common,
    ...local
  },
  production: {
    ...production,
    ...local
  }
};

let env = "local";

if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
  env = process.env.NODE_ENV;
}

export const isLocal = () => env === "local";
export const isProduction = () => env === "production";

export default config[env];
