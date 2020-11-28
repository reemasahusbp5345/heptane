import React, { Component } from "react";
import axios from "axios";
export const AppContext = React.createContext();
export class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      email: "",
      password: "",
      currentUser: false,
      isPageLoading: false,
      posting: false,
      posts: [],
      like: false,
      activeUser: "",
    };
    this.addPost = this.addPost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectTo = this.redirectTo.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.saveData = this.saveData.bind(this);
    this.checkData = this.checkData.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.update = this.update.bind(this);
    this.addText = this.addText.bind(this);
  }
  handleLike() {}
  componentDidMount() {
    this.update()
  }

  update(){
    axios.get(`https://tumblr-server.herokuapp.com/posts`).then((res) => {
      this.setState({
        posts: [...res.data],
      });
    });
  }

  addText(title, text){
    const { currentUser } = this.state;

    axios
      .post(`https://tumblr-server.herokuapp.com/posts`, {
        author_id: currentUser,
        post_by: "reema",
        content: text,
        postType: "text",
        title: title,
        src: "https://64.media.tumblr.com/35388ffef62bc82b7aa77fb8c9b7fa7d/d627679440977fcb-fa/s64x64u_c1/28019b815196325207468906e884ca3cacd02263.pnj",
        numberOfNotes: 0,
        hashtags: ["#first_post", "tumblr"],
        isFollow: false,
        isLike: false,
      })
      .then((res) => this.update())
      .catch((err) => alert("err"));
  }


  addPost(text) {
    const { post, currentUser, activeUser } = this.state;
    
    axios
      .post(`https://tumblr-server.herokuapp.com/posts`, {
        author_id: currentUser,
        post_by: activeUser.username,
        content: text,
        postType: "text",
        src:
          "https://assets.tumblr.com/images/default_avatar/sphere_open_64.png",
        numberOfNotes: 0,
        hashtags: ["#first_post", "tumblr"],
        isFollow: false,
        isLike: false,
      })
      .then((res) => this.update())
      .catch((err) => alert("err"));
  }

  addPhoto(post, img) {

    const { currentUser,activeUser } = this.state;
    console.log(activeUser.post_by)
    axios
      .post(`https://tumblr-server.herokuapp.com/posts`, {
        author_id: currentUser,
        post_by: "reema",
        content: img,
        postType: "image",
        src:
          "https://64.media.tumblr.com/35388ffef62bc82b7aa77fb8c9b7fa7d/d627679440977fcb-fa/s64x64u_c1/28019b815196325207468906e884ca3cacd02263.pnj",
        numberOfNotes: 0,
        hashtags: ["#first_post", "tumblr"],
        isFollow: false,
        isLike: false,
      })
      .then((res) => this.update())
      .catch((err) => alert("err"));
  }

  // handling changes inside inputs
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  // handling onSubmit logic of form
  // handling changes inside inputs
  async handleSubmit(e, history) {
    e.preventDefault();
    this.setState({
      isPageLoading: true,
    });
    await axios
      .get("https://tumblr-server.herokuapp.com/users")
      .then((res) => this.saveData(res.data, history))
      .catch((err) => console.log(err));
    this.setState({
      isPageLoading: false,
    });
  }

  saveData(data, history) {
    // checking if email is present in database
    // if it exists then we will check if pasword is corect
    let user = data.find(
      (user) =>
        user.email === this.state.email && user.password === this.state.password
    );
    if (user !== undefined) {
      this.setState({
        currentUser: user.id,
        isAuth: true,
        activeUser: user
      });
      console.log(this.state.activeUser)
      history.push("/dashboard");
    } else {
      this.setState({
        currentUser: false,
      });
    }
  }

  // function to redirect
  redirectTo(history, path) {
    history.push(path);
    this.setState({
      isAuth: false,
    });
  }
  async handleSignUp(e, email, username, password, history) {
    e.preventDefault();
    this.setState({
      isPageLoading: true,
    });
    await axios
      .get("https://tumblr-server.herokuapp.com/users")
      .then((res) =>
        this.checkData(res.data, email, username, password, history)
      )
      .catch((err) => console.log(err));
    this.setState({
      isPageLoading: false,
    });
  }

  async checkData(data, email, username, password, history) {
    // checking if email is present in database
    // if it exists then we will check if username exists
    let user = data.filter(
      (item) => item.username === username || email === item.email
    );
    if (user.length === 0) {
      await axios({
        method: "post",
        url: "https://tumblr-server.herokuapp.com/users",
        data: {
          email: email,
          username: username,
          password: password,
        },
      })
        .then((res) => {
          this.setState({
            currentUser: res.data.id,
            isAuth: true,
          });
          history.push("/dashboard");
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const {
      isAuth,
      email,
      password,
      currentUser,
      data,
      posts,
      user,
      activeUser
    } = this.state;
    const {
      handleChange,
      handleSubmit,
      redirectTo,
      handleSignUp,
      addPost,
      addPhoto,
      handleLike,
      addText
    } = this;
    const value = {
      isAuth,
      handleChange,
      handleSubmit,
      email,
      password,
      currentUser,
      redirectTo,
      handleSignUp,
      user,
      posts,
      addPost,
      posts,
      addPhoto,
      activeUser,
      handleLike,
      addText
    };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
