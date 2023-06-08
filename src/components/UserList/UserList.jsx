import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/").then((res) =>
      setUsers(res.data)
    );
  }, []);

  return (
    <div className="container">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/detail/${user.id}`}>
              <ItemListContainer data={user} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
