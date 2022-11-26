const express = require("express");
const Router = express.Router();
const postControllers = require("../controllers/postsControllers");

Router.get("/", postControllers.getPosts);
Router.get("/:id", postControllers.findPost);
Router.post("/", postControllers.addPosts);
Router.put("/:id", postControllers.updatePosts);
Router.delete("/:id", postControllers.delPosts);

module.exports = Router;
