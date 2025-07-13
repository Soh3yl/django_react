import React, { useEffect, useState } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

    const sendToDjango = () => {
    const fixedUsers = users.map((user) => ({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website.startsWith("http")
        ? user.website
        : `http://${user.website}`,
    }));

    fetch("http://localhost:8000/api/save-users/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(fixedUsers),
    })
        .then((res) => res.json())
        .then((data) => {
        console.log("Response from Django:", data);
        alert("Users saved to backend.");
        });
    };

  return (
    <div>
      <h1>Users from API</h1>
      {loading ? <p>Loading...</p> : (
        <>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
          <button onClick={sendToDjango}>Send to Django</button>
        </>
      )}
    </div>
  );
}

export default FetchUsers;
