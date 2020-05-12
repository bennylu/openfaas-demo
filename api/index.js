const { exec } = require("child_process");

let describe = function (fn) {
  return new Promise((resolve, reject) => {
    exec("faas-cli describe " + fn, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);

      let lines = stdout.split("\n");
      let info = {};
      lines.forEach((line) => {
        let arr = line.split(":");
        if (arr[0] && arr[1]) info[arr[0].trim()] = arr[1].trim();
      });

      return resolve(info);
    });
  });
};

let express = require("express");
let app = express();
app.use(require('cors')());

app.get("/:fn", async function (req, res) {
  await describe(req.params.fn)
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send();
    });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
