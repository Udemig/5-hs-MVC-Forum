import React from 'react';

const AddPostView = ({ onInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Kullanıcı Adı</label>
        <input
          onChange={(e) => onInputChange('user', e.target.value)}
          type="text"
          placeholder="Kullanıcı adı giriniz"
        />
      </fieldset>

      <fieldset>
        <label>Başlık</label>
        <input
          onChange={(e) => onInputChange('title', e.target.value)}
          type="text"
          placeholder="Başlığı giriniz"
        />
      </fieldset>

      <fieldset>
        <label>Mesajınız</label>
        <textarea
          onChange={(e) => onInputChange('text', e.target.value)}
          type="text"
          placeholder="Açıklamayı giriniz"
          maxLength={'100'}
        />
      </fieldset>

      <button>Gönder</button>
    </form>
  );
};

export default AddPostView;
