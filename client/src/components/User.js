import React, { useEffect, useState } from "react";

const Users = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("테스트합니다.");
        setBackendData(data);
      });
  }, []);
  const userInfo = backendData.map((datas, index) => {
    return (
      <li key={index}>
        {datas.username} : {datas.age}
      </li>
    );
  });
  return (
    <div>
      <h1>Users Component</h1>
      <h2>회원목록</h2>
      <ul>{userInfo}</ul>
    </div>
  );
};

export default Users;
