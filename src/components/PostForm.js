import { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      duration: "",
    };
  }
  render() {
    return (
      <div className="post container">
        <h1 className="text-center">Add new video</h1>
        <div className="input-group mb-3">
          <span className="input-group-text" id="title">
            Video Title
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            aria-label="title"
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="duration">
            Video duration
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="duration"
            aria-label="duration"
            onChange={(e) => this.setState({ duration: e.target.value })}
          />
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-info "
            onClick={() =>
              this.props.onClick(this.state.title, this.state.duration)
            }
          >
            Add Video
          </button>
          <button
            type="button"
            className="btn btn-danger  float-end"
            onClick={() => this.props.onCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default PostForm;
