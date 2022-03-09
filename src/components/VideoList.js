import Video from "./Video";
import axios from "axios";
import { Component } from "react";
import PostForm from "./PostForm";
import { host } from "../config";

// function VideoList() {
//   console.log("ry");
//   return (
//     <div>
//       <Video title="{videos[0].data}" duration="9" date="22" />
//     </div>
//   );
// }

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], showForm: false };
    this.handelAxiosReq = this.handelAxiosReq.bind(this);
  }
  componentDidMount() {
    this.handelAxiosReq(host);
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.state.showForm ? (
            <PostForm
              onClick={this.handelPostVideo}
              onCancel={() => {
                this.setState({ showForm: false });
              }}
            />
          ) : (
            <button
              className="btn btn-warning m-3"
              onClick={() => this.setState({ showForm: true })}
            >
              Add New Video
            </button>
          )}
        </div>

        <div>
          {this.state.videos[0]
            ? this.videoMapping(this.state.videos)
            : "no title"}
        </div>
      </div>
    );
  }

  handelAxiosReq = async function (url) {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.setState({ videos: res.data });
      })
      .catch((er) => console.log(er));
  };

  videoMapping = (list) => {
    return list.map((v) => {
      return (
        <Video
          key={v.id}
          id={v.id}
          title={v.title}
          duration={v.duration}
          date={v.modify_date}
          onDelete={this.handelDelete}
          onPut={this.handelAxiosReq}
        />
      );
    });
  };

  handelPostVideo = (title, duration) => {
    this.setState({ showForm: false });
    const vid = {
      title: title,
      duration: duration,
    };
    axios
      .post(host, vid)
      .then((response) => {
        this.handelAxiosReq(host);
      })
      .catch((error) => {
        console.log(error);
        alert("Something gose wrong\nVideo upload faild");
      });
  };

  handelDelete = (id) => {
    axios
      .delete(host + id)
      .then(() => {
        this.handelAxiosReq(host);
        alert("Video has been deleted Sucessfuly :)");
      })
      .catch((err) => {
        console.log(err);
        alert("Something gose wrong\nVideo deletion faild");
      });
  };
}

export default VideoList;

/*
axios
    .get(host)
    .then((res) => {
      console.log("hy");
      return (
        <div>
          <Video title="{v].data}" duration="9" date="22" />
        </div>
      );
    })
    .catch((er) => console.error(er));
    */
