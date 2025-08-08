import React from "react";
import { useFetch } from "./useFetch";

function FetchApp() {
  const { loading, data, error } = useFetch("https://jsonplaceholder.typicode.com/users/1");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
    </div>
  );
}

export default App;
