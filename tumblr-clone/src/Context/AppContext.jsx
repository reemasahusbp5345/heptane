import { mdiAxisXRotateClockwise } from "@mdi/js";
import React, { Component } from "react";

import axios from "axios";
import { ConsoleSqlOutlined } from "@ant-design/icons";

export const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,

      posting: false,
      user: [],
    };
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
    axios.get(`https://tumblr-server.herokuapp.com/users`).then((res) => {
      this.setState({
        user: [res.data[0]],
      });
    });
  }

  addPost(newPost) {
    const { post } = this.state;
    this.setState({
      post: [post, newPost],
    });
  }

  render() {
    const { isAuth, user } = this.state;
    console.log(user);
    const { addPost } = this;
    const value = {
      isAuth,
      addPost,

      email: "",
      password: "",
      isPageLoading: false,
      data: [], //
      currentUser: false,
    };

    //binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }

  // handling changes inside inputs
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // handling onSubmit logic of form
  async handleSubmit(e) {
    e.preventDefault();
    const { data } = this.state;
    this.setState({
      isPageLoading: true,
    });
    await axios
      .get("https://tumblr-server.herokuapp.com/users")
      .then((res) =>
        this.setState({
          data: res.data,
        })
      )
      .catch((err) => Console.log(err));

    // checking if email is present in database
    // if it exists then we will check if pasword is corect
    let user = data.find(
      (user) =>
        user.email === this.state.email && user.email === this.state.password
    );

    if (user !== undefined) {
      this.setState({
        currentUser: user.id,
      });
    } else {
      this.setState({
        currentUser: false,
      });
    }
  }

  // function to redirect to dashboard if logged in already
  redirectToLogin(history) {
    history.push("/dashboard");
  }

  render() {
    const { isAuth, email, password, currentUser } = this.state;
    const { handleChange, handleSubmit, redirectToLogin } = this;
    const value = {
      isAuth,
      handleChange,
      handleSubmit,
      email,
      password,
      currentUser,
      redirectToLogin,
    };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
