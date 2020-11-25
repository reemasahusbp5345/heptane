import { mdiAxisXRotateClockwise } from "@mdi/js";
import React, { Component } from "react";

import axios from "axios";
import { Redirect } from "react-router-dom";

export const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: true,
        email:"",
        password:"",

      posting: false,
      posts: [],
    };
    this.addPost = this.addPost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectTo = this.redirectTo.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.saveData = this.saveData.bind(this);
    this.checkData = this.checkData.bind(this);
    this.addPhoto=this.addPhoto.bind(this)
  }

  componentDidMount() {
    axios.get(`https://tumblr-server.herokuapp.com/posts`).then((res) => {
      this.setState({
        posts: [...res.data],
      });
    });
  }

  addPost(text) {
    const { post,currentUser } = this.state;
    console.log(text)
    // this.setState({
    //   post: [post, newPost],
    // });
    // let payload={
    //     "author_id":currentUser,
    //     "post_by": "monis",
    //     "content": text ,
    //     "postType": "text",
    //     "src": "https://64.media.tumblr.com/35388ffef62bc82b7aa77fb8c9b7fa7d/d627679440977fcb-fa/s64x64u_c1/28019b815196325207468906e884ca3cacd02263.pnj",
    //     "numberOfNotes": 155,
    //     "hashtags": [
    //       "#first_post",
    //       "tumblr"
    //     ],
    //     "contentSource": "http://somerandomsource.com"
    // }
    axios.post(`https://tumblr-server.herokuapp.com/posts`,{
         "author_id":currentUser,
        "post_by": "monis",
        "content": text ,
        "postType": "text",
        "src": "https://64.media.tumblr.com/35388ffef62bc82b7aa77fb8c9b7fa7d/d627679440977fcb-fa/s64x64u_c1/28019b815196325207468906e884ca3cacd02263.pnj",
        "numberOfNotes": 155,
        "hashtags": [
          "#first_post",
          "tumblr"
        ],
        "contentSource": "http://somerandomsource.com"
    })
    .then((res)=>alert('succes'))
    .catch((err)=>alert('err'))
  }

  addPhoto(text,img){
      const {currentUser}=this.state;
    axios.post(`https://tumblr-server.herokuapp.com/posts`,{
        "author_id":currentUser,
       "post_by": "monis",
       "content": text,
       "postType": "image",
       "src": img,
       "numberOfNotes": 155,
       "hashtags": [
         "#first_post",
         "tumblr"
       ],
       "contentSource": "http://somerandomsource.com"
   })
   .then((res)=>alert('succes'))
   .catch((err)=>alert('err'))
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

  // handling onSubmit logic of form
  async handleSubmit(e) {
    e.preventDefault();

    this.setState({
      isPageLoading: true,
    });
    await axios
      .get("https://tumblr-server.herokuapp.com/users")
      .then((res) => this.saveData(res.data))
      .catch((err) => console.log(err));
  }

  saveData(data) {
    console.log(data);

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
      });
    }
  }

  // function to redirect
  redirectTo(history, path) {
    history.push(path);
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
          // history.push("/dashboard")
        })
        .catch((err) => console.log(err));
    }
  }

  // render() {
  //     const { isAuth,user } = this.state
  //     console.log(user)
  //     const {addPost}=this
  //     const value ={
  //         isAuth,addPost,

  //         email:"",
  //         password:"",
  //         isPageLoading: false,
  //         data:[], //
  //         currentUser:false

  //     }

  //     //binding
  // }
  render() {
    const { isAuth, email, password, currentUser, data, posts,user } = this.state;
    
    const {
      handleChange,
      handleSubmit,
      redirectTo,
      handleSignUp,
      addPost,
      addPhoto
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
      addPost,
      posts,
      addPhoto
    };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
