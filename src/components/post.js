import './style.css';

const Post = (params) => {
  const { post } = params;

  const date = post.date ? new Date(post.date) : new Date();
  return (
    <div key={post.id} class="post">
      <h2>{post.title}</h2>
      <p>
        <b>{post.username}</b>
      </p>
      <p>{post.content}</p>
      <p>
        <em>Published {date.toLocaleString()}</em>
      </p>
    </div>
  );
};

export default Post;
