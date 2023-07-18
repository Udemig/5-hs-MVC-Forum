import Popup from '../../components/Popup';

const ListPostsView = ({
  blogData,
  showUserPosts,
  showPopup,
  userPosts,
  setShowPopup,
}) => {
  if (!blogData) return 'Loading...';

  return (
    <div className="container">
      {blogData.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-info">
            <h1>{post.title}</h1>
            <p onClick={() => showUserPosts(post.user)}>
              {post.user}
            </p>
          </div>
          <p className="post-text">{post.text}</p>
        </div>
      ))}

      {/* popup'ı doğru zamanda gösterme */}
      {showPopup && (
        <Popup userPosts={userPosts} setShowPopup={setShowPopup} />
      )}
    </div>
  );
};

export default ListPostsView;
