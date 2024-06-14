import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Data fetching failed");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError("Data fetching failed");
      }
    };

    fetchPosts();
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Posts</h1>
      {error ? (
        <div style={{ textAlign: "center", color: "black" }}>
          <strong>{error}</strong>
        </div>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {posts.map((post, index) => (
            <li key={post.id}>
              <h2>
                {index + 1}. {post.title}
              </h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
