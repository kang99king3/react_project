const express = require("express");
const app = express();
const users = require("./router/users");

/* DB 연결은 관련 코드만 추가했고, express에서 Connection pool을 관리하는 코드 찾아보고 수정해야함
//mariaDB connect
const maria = require("./my-app/database/connect/maria");
maria.connect();

app.get('/select',function(req,res){
  maria.query('select * from hk',function(err,result,field){
      if(!err){
          console.log(result);
         // res.json({rows : rows})
          res.send(result);
      }else{
          console.log("err:"+err);
          res.send(err);
      }
  });

})
*/

app.use(express.json());
//도메인에서 다른 도메인으로 데이터를 잘 전달시키기 위한 라이브러리 cors
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
