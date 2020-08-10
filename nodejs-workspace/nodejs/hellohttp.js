var http = require("http");

// http 서버 생성
http
  .createServer(function (req, res) {
    // Response Header Setting
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    // Response Message Write
    res.write("<h1>Hello Node</h1>");
    // Response End
    res.end();
  })
  .listen(8888, function (err, result) {
    // 소켓 번호
    if (err) {
      console.err(err);
    } else {
      console.log("Server is running on http://localhost:8888");
    }
  });
