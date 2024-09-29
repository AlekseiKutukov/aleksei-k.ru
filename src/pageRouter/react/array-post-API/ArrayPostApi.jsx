import Posts from './Posts';

const ArrayPostApi = () => {
  return (
    <>
      <h1>Массив постов из API</h1>

      <div>- Обрабатываем ошибку сервера если она есть </div>
      <div>- Индикация загрузки данных (Лоадер)</div>

      <div className="memorandum">fetch .then .catch .finally</div>

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
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((resPost) => {
        //console.log(resPost);
        setPosts(resPost);
      })
      .catch((error) => SetError(error.message))
      .finally(() => setIsLoading(false)); // finally выполняется в любом случае, а конце комуникации с сервером
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
        posts.map((post) => <Post key={post.id} {...post} />)
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

export default ArrayPostApi;
