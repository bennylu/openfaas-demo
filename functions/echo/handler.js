"use strict";

module.exports = async (event, context) => {
  return context
    .headers({
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    })
    .status(200)
    .succeed({ status: "done" });
};
