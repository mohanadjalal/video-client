import "./App.css";
import VideoList from "./components/VideoList";
import Nav from "./components/Nav";
import { Component } from "react";
import PostForm from "./components/PostForm";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <Nav />
        <VideoList />
      </div>
    );
  }
}

export default App;
