import React, { Component } from "react";
import axios from "axios";

export const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isAuth: false,
      isLoading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("https://tumblr-server.herokuapp.com/users")
      .then((res) => {
        this.setState({
          data: [...res.data],
          isLoading: false,
          error: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
          isLoading: false,
        });
      });
  }

  render() {
    const { isAuth, isLoading, error, data } = this.state;
    const value = {
      data,
      isAuth,
      isLoading,
      error,
    };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
