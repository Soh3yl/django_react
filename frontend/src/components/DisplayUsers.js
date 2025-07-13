import React, { useEffect, useState } from "react";

function DisplayUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/get-users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users from Django Backend</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayUsers;
