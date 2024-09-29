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

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((resPost) => {
  //       //console.log(resPost);
  //       setPosts(resPost);
  //     })
  //     .catch((error) => SetError(error.message))
  //     .finally(() => setIsLoading(false)); // finally выполняется в любом случае, а конце комуникации с сервером
  // }, []);

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
