import config from "./config.json";

export const $db = () => config.db;
export const $security = () => config.security;
export const $serverPort = () => config.serverPort;
