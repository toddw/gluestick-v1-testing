const http = require("http");

const items = [];

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const key = `${req.method} ${req.url}`;

  // eslint-disable-next-line no-console
  console.log(key);

  const handler = requestHandlers[key] || notFound;
  handler(req, res);
}).listen(4000);

const notFound = (req, res) => {
  res.writeHead(400);
  res.end("not found");
};

const requestHandlers = {
  "OPTIONS /": (req, res) => {
    res.end(":+1:");
  },
  "GET /": (req, res) => {
    res.end(JSON.stringify(items));
  },
  "POST /": (req, res) => {
    let data = "";

    req.on("data", (buf) => {
      data += buf.toString("utf8");
    });

    req.on("end", () => {
      const item = JSON.parse(data).item;
      items.push(item);
      res.end(item);
    });
  }
};


