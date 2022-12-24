const express = require("express");

const routes = express.Router();
const main = require("../scaperFn/scrap");

routes.post("/indeed", async (req, res) => {
  try {
    const { skill } = req.body;
    let scape = await main(skill);
    return res.status(200).json({
      status: "ok",
      list: scape?.list || {},
    });
  } catch (e) {
    return res.status(500).send(e);
  }
});
module.exports = routes;
