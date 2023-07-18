import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ListPosts from './pages/ListPosts/ListPostsController';
import AddPost from './pages/AddPost/AddPostController';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListPosts />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
