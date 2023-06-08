import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const DetailPage = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      setUser(res.data)
    );
  }, [id]);

  return (
    <div>
      <h1 style={{ textAlign:"center"}}>Detail Page</h1>
      {user && <ItemListContainer data={user} />}
    </div>
  );
};

export default DetailPage;
