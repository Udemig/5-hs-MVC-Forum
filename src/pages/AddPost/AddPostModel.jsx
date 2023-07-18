class AddPostModel {
  // form gönderilnce apiye post
  // yapıcağımız verinin ilk halini
  // burada tuttuk

  state = {
    id: new Date().getTime(),
    user: '',
    title: '',
    text: '',
  };
}

export default AddPostModel;
