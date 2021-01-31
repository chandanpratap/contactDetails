import React from "react";
import "./form.css";
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      dis: "",
    };
  }

  render() {
    return (
      <div className="box">
        <div className="contact-box">
          <form onSubmit={this.props.submitHandler}>
            <input
              type="text"
              className="input-field"
              name="title"
              placeholder="Title"
              value={this.props.title}
              onChange={this.props.changeHandler}
            />
            <br />
            <textarea
              type="text"
              className="textarea-field"
              name="description"
              rows="5"
              value={this.props.description}
              placeholder="Description"
              onChange={this.props.changeHandler}
            />
            <br />
            <button type="submit" className="btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
