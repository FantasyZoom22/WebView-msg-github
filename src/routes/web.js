const express = require("express");
//import homepageController from "../controllers/homepageController";
const homepageController = require("../controllers/homepageController");
let router = express.Router();

//init all web routes
let initWebRoutes = (app) => {
    router.get("/", homepageController.getHomepage);
    router.get("/webhook", homepageController.getWebhook);
    router.post("/webhook", homepageController.postWebhook);
    router.get("/webview/:sender_psid", homepageController.getWebViewPage);
    router.post("/setup-webview", homepageController.handleWebView);
    router.post("/setup", homepageController.handleWebInfo);

    return app.use("/", router);
};

module.exports = initWebRoutes;
