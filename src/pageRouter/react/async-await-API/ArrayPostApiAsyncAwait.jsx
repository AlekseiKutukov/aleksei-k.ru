import Posts from './Posts';

const ArrayPostApiAsyncAwait = () => {
  return (
    <>
      <h1>Массив постов из API с помощью async/await</h1>

      <div>- Обрабатываем ошибку сервера если она есть </div>
      <div>- Индикация загрузки данных (Лоадер)</div>

      <div className="memorandum">
        <pre>
          <code>{`(async function(){...) () -  IIFE Immediately Invoked Function Expression

try {
  fetch ...
  } 
catch (error) {
  ...
  }
... //тут то что выполнится независимо от результата`}</code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            {`******* Posts.jsx *******  

import { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, SetError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const resPost = await res.json();
        setPosts(resPost);
      } catch (error) {
        SetError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);
  
  //   console.log(posts);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.slice(0, 6).map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  );
};

export default Posts;

`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            {`******* Post.jsx *******  

const Post = (props) => {
  //console.log(props);
  const { id, title, userId, body } = props;

  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>User ID: {userId}</h3>
    </div>
  );
};

export default Post;
`}
          </code>
        </pre>
      </div>
      <Posts />
    </>
  );
};

export default ArrayPostApiAsyncAwait;
