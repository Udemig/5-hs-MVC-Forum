import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPostController = () => {
  // model class'ından bir örnek oluşturma
  const model = new AddPostModel();
  const navigate = useNavigate();

  // formun state'ini burada tutucaz
  const [formState, setFormState] = useState(model.state);

  // inputların veri tiplerini ve değerlerini alıp
  // state'e aktarıcak fonksyion
  const onInputChange = (label, value) => {
    // state'in kopyasını alma
    let copyState = { ...formState };

    // bize gelen label değerine göre kopya state'teki eşleşen özelliği günceller
    copyState[label] = value;

    // gerçek state'i güncelleme
    setFormState(copyState);
  };

  //   formun göndeilme olayı
  const handleSubmit = (e) => {
    e.preventDefault();

    const letters = /^[A-Za-z]+$/;

    // form boş mu kontrol etme
    if (!formState.user || !formState.text || !formState.title) {
      alert('Formu Doldurun');
      return;
    } else if (!formState.user.match(letters)) {
      alert('Kullanı ismi sayı ve özel karakter içeremez');
      return;
    }

    // eğerki koşullardan geçerse apiye postu gönderme
    // form başarıyla gönderlise ana sayfaya yönlendir
    axios
      .post('http://localhost:3030/posts', formState)
      .then(() => navigate('/'));
  };

  return (
    <AddPostView
      onInputChange={onInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddPostController;
