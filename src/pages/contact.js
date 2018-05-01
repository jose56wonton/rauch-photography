import React, { Component } from "react";

const UNTOUCHED = "untouched";
const LOADING = "loading";
const FAILED = "failed";
const SUCCESS = "success";

import * as api from "../api";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Joshua Wootonn",
      nameError: "",
      email: "jose56wonton@gmail.com",
      emailError: "",
      message: "Is a long established fact that a reader will be di.",
      status: UNTOUCHED
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    ;
    const { name, email, message } = this.state;

    const err = this.validate();

    if (!err) {

      api
        .send({
          to: "jose56wonton@gmail.com",
          from: "Notify@ZachRauch.com",
          subject: `New Contact - ${name}`,
          message: `
      Name: ${name}
      Email: ${email} 
      Message: ${message}
      `
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.setState=({
        name:"",
        email:"",
        message:"",
        nameError:"",
        emailError:"",
        messageError:"",
      })
    }
  };
  validate = () => {
    let isError = false;
    const errors = {
      nameError: "",
      emailError: "",
      messageError: ""
    };
    const messageReg = new RegExp("^[a-zA-Z.,!? ]*$");
    const nameReg = new RegExp("^[a-zA-Z ,.'-]+$")
    const emailReg = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    )
    // Name validation
    if (this.state.email.indexOf(" ") === -1 || this.state.name.length < 6) {
      isError = true;
      errors.nameError = "Enter both a first and last name";
    }
    if (!nameReg.exec(this.state.name)) {
      isError = true;
      errors.nameError = "Invalid characters";
    }
    // Email validation
    if(!emailReg.exec(this.state.email)){
      isError = true;
      errors.emailError = "Invalid Email";
    }    
    console.log(errors);
    isError = true;
    this.setState({
      ...this.state,
      ...errors
    });
    console.log(this.state)
    return isError;
  }
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
              errorText={this.state.nameError}
              onChange={this.handleChange}
            />
          </div>
          {this.state.nameError ? <p className="help is-danger">{this.state.emailError}</p> : null}
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
              errorText={this.state.emailError}
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
              errorText={this.state.messageError}
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
