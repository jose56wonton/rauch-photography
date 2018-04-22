import React, { Component } from "react";

const UNTOUCHED = 'untouched';
const LOADING = 'loading';
const FAILED = 'failed';
const SUCCESS = 'success';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      status: UNTOUCHED
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {    
    console.log(send(this.state.name,this.state.email,this.state.message))
    this.state.event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="e.g Alex Smith"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              type="textarea"
              placeholder="What kinda project are you..."
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="control">
          <button onClick={this.handleSubmit} className="button is-primary">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;
