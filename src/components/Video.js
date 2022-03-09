import axios from "axios";
import { Component } from "react";
import { host } from "../config";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, title: " ", duration: " " };
  }
  render() {
    return <>{this.state.edit ? this.editCard() : this.showCard()}</>;
  }
  showCard = () => {
    return (
      <div className="card ">
        <h1 className="text-center">{this.props.title}</h1>
        <div className="card-body text-center">
          <h4>Duration:{this.props.duration} Sec</h4>
          <h4>Modify Date:{this.props.date} </h4>

          <div className="">
            <button
              className="btn btn-primary m-2"
              onClick={() => {
                this.setState({ edit: true });
              }}
            >
              Edit
            </button>

            <button
              className="btn btn-danger m-2"
              onClick={() => this.props.onDelete(this.props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  editCard = () => {
    return (
      <div className="edit card">
        <h1>Edit Video</h1>
        <div className="edit-header">
          <label className="">Title</label>
          <input
            className=""
            type="text"
            placeholder={this.props.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </div>
        <div className="edit-header">
          <label className="">Duration</label>
          <input
            className=""
            type="number"
            placeholder={this.props.duration}
            onChange={(e) => this.setState({ duration: e.target.value })}
          />
        </div>

        <div className="edit-btn">
          <button
            className="btn btn-info m-2"
            onClick={() =>
              this.handelEdit(
                this.props.id,
                this.state.title,
                this.state.duration
              )
            }
          >
            Confirm
          </button>
          <button
            className="btn btn-warning m-2"
            onClick={() => this.setState({ edit: false })}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  handelEdit = (id, title, duration) => {
    this.setState({ edit: false });
    const video = {
      title: title,
      duration: duration,
    };
    axios
      .put(host + id, video)
      .then(() => this.props.onPut(host))
      .catch((err) => {
        console.log(err);
        alert("Something gose wrong\nVideo Edit faild");
      });
  };
}

export default Video;
