const http = require("http");
const port = 4000;

const requestHandler = (request, response) => {
  const body = {
    header_bg: "bg-red-500",
    footer_bg: "bg-blue-500",
    main_bg: "bg-yellow-500",
  };
  response.end(JSON.stringify(body));
};

const server = http.createServer(requestHandler);
server.listen(port, (e) => {
  if (e) {
    console.error("Something went wrong \n", e);
  }
  console.log(`Server listening on port ${port}`);
});
