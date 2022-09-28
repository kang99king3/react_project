const express = require("express");
const app = express();
const users = require("./router/users");

app.use(express.json());
var cors = require("cors");
app.use(cors());

app.use("/api", users);

/*
app.get("/api", (req, res) => {
  console.log("서버에서 api요청");
  res.json({ username: "Kang", age: 26 });
});

app.get("/api", (req, res) => {
  res.send("hello world from express!!");
});
*/

const port = 5000; //노드 서버가 사용할 포트넘버
app.listen(port, () => {
  console.log(`${port}`);
});
