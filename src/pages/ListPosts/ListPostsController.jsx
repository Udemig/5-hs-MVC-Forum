import { useEffect, useState } from 'react';
import ListPostsView from './ListPostsView';
import axios from 'axios';

const ListPostsController = () => {
  const [blogData, setBlogData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  // post verilerini çekme
  useEffect(() => {
    axios
      .get('http://localhost:3030/posts')
      .then((res) => setBlogData(res.data));
  }, []);

  // kullanıya tıklanınca çalışır
  const showUserPosts = (username) => {
    // popup'ı göster
    setShowPopup(!showPopup);

    // paramtre olarak gelen kullanıcıya ait postları alma
    const filtred = blogData.filter((post) => post.user === username);

    // state'e gönderme
    setUserPosts(filtred);
  };

  return (
    <ListPostsView
      blogData={blogData}
      showUserPosts={showUserPosts}
      showPopup={showPopup}
      userPosts={userPosts}
      setShowPopup={setShowPopup}
    />
  );
};

export default ListPostsController;
