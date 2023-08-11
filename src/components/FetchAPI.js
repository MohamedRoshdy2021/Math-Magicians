import React, { useState, useEffect } from 'react';

export default function Api() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=dating', {
      method: 'GET',
      headers: {
        'X-Api-Key': '9m7PseExHusn5wNJIgKbQg==yaobg8xRyBMMWoYM',
      },
      contentType: 'application/json',
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  if (loading) {
    return <div className="qoute-loading">please wait while Loading...</div>;
  }

  if (error) {
    return (
      <div className="qoute-loading">
        Error: cant get the data from api
      </div>
    );
  }

  return (
    <div className="qoute">
      <h2>Quote od the day</h2>
      <ul>
        {data.map((q) => (
          <li key={1}>{q.quote}</li>
        ))}
      </ul>
    </div>
  );
}
