import './style.css';

const Post = (params) => {
  const { post } = params;

  return (
    <div key={post.id} class="post">
      <h2>{post.title}</h2>
      <p>
        <b>{post.username}</b>
      </p>
      <p>{post.content}</p>
      <p>
        <em>Published {new Date(post.date).toLocaleString()}</em>
      </p>
    </div>
  );
};

export default Post;
