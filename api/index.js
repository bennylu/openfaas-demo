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

let pods = function (fn) {
  return new Promise((resolve, reject) => {
    exec("sudo kubectl get pods -n openfaas-fn", (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);

      let lines = stdout.split("\n");
      let pods = [];
      lines.forEach((line) => {
        if (line.startsWith("NAME")) return true;
        if (!line.startsWith(fn)) return true;
        let arr = line.split(/\s+/);
        if (arr.length < 5) return true;

        pods.push({
          name: arr[0],
          status: arr[2],
          age: arr[4],
        });
      });

      return resolve(pods);
    });
  });
};

let express = require("express");
let app = express();
app.use(require("cors")());

app.get("/:fn", async function (req, res) {
  let ret = {};

  try {
    await Promise.all([
      describe(req.params.fn).then((response) => {
        ret.describe = response;
      }),
      pods(req.params.fn).then((response) => {
        ret.pods = response;
      }),
    ]);

    res.send(ret);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

app.listen(4000, function () {
  console.log("Example app listening on port 4000!");
});
