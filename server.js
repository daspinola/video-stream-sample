const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const ytdl = require("ytdl-core");

app.use(express.static(path.join("/", "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/views" + "/index.htm"));
});

app.get("/download", (req, res) => {
  var URL = req.query.URL;
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(URL, {
    format: "mp4"
  }).pipe(res);
});

app.get("/video", function(req, res) {
  const path = "assets/sample.mp4";
  var URL = req.query.URL;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  const video = ytdl(URL, {
    format: "mp4"
  });
  var num = 0;
  // Example of choosing a video format.
  ytdl.getInfo(URL, (err, info) => {
    if (err) throw err;
    let format = ytdl.chooseFormat(info.formats, { quality: "134" });
    if (format) {
      num = format.clen;
      console.log("Format found!" + num);
      console.log(format);
      console.log("orig file size " + fileSize);
    }
  });

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : num - 1;

    const chunksize = end - start + 1;
    // const file = fs.createReadStream(path, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${num}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4"
    };

    res.writeHead(206, head);
    video.pipe(res);
  } else {
    const head = {
      "Content-Length": num,
      "Content-Type": "video/mp4"
    };
    res.writeHead(200, head);
    video.pipe(res);
  }
});

app.listen(3000, function() {
  console.log("Listening on port 3000!");
});
