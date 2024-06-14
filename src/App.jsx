import { useState, useEffect } from "react";

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

  return <></>;
};

export default App;
