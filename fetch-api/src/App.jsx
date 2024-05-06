import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [firstCategory, setFirstCategory] = useState([]);
  const [secondCategory, setSecondCategory] = useState([]);
  const [thirdCategory, setThirdCategory] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(apiResult => apiResult.json())
      .then(data => { setPosts(data);
        categorizePosts(data);
      });
  };

  const categorizePosts = (data) => {
    if (data.length >= 3) {
      setFirstCategory([data[0]]);
      setSecondCategory([data[1]]);
      setThirdCategory([data[2]]);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch API</button>
      <div>
        <h2>First Category</h2>
        {firstCategory.map(post => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Second Category</h2>
        {secondCategory.map(post => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Third Category</h2>
        {thirdCategory.map(post => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
