import React from 'react';

const Popup = ({ userPosts, setShowPopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <p className="close">
          <span onClick={() => setShowPopup(false)}>X</span>
        </p>
        <h2>
          <span>{userPosts[0].user}</span> Kullanıcısının Gönderileri
        </h2>
        {userPosts.map((post) => (
          <div className="post">
            <h1>{post.title}</h1>
            <p className="post-text">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup;
