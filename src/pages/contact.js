import React, { Component } from "react";

const INITIAL = "initial";
const LOADING = "loading";
const FAILURE = "failure";
const SUCCESS = "success";

import * as api from "../api";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      message: "",
      status: INITIAL
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    const { name, email, message } = this.state;

    const err = this.validate();
    const here = this;
    if (!err) {
      api
        .send({
          to: "jose56wonton@gmail.com",
          from: "ZachRauch@ZachRauch.com",
          subject: `New Contact - ${name}`,
          message: `
      Name: ${name}
      Email: ${email} 
      Message: ${message}
      `
        })
        .then(response => {
          here.setState({
            name: "",
            email: "",
            message: "",
            nameError: "",
            emailError: "",
            status: SUCCESS
          });
          console.log(response);
        })
        .catch(error => {
          here.setState({
            status: FAILURE
          });
          console.log(error);
        });
    }
  };
  close = () => {
    this.setState({
      status: INITIAL
    });
  };
  validate = () => {
    let isError = false;
    const errors = {
      nameError: "",
      emailError: ""
    };
    const nameReg = new RegExp("^[a-zA-Z ,.'-]+$");
    const emailReg = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    );
    // Name validation
    if (this.state.name.indexOf(" ") === -1 || this.state.name.length < 6) {
      isError = true;
      errors.nameError = "Enter both a first and last name";
    }
    if (!nameReg.exec(this.state.name)) {
      isError = true;
      errors.nameError = "Invalid Name";
    }
    // Email validation
    if (!emailReg.exec(this.state.email)) {
      isError = true;
      errors.emailError = "Invalid Email";
    }
    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };
  render() {
    return (
      <div className="container contact-height">
      <div className="contact-spacer"></div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className={`input ${this.state.nameError ? "is-danger" : ""}`}
              type="text"
              placeholder="e.g Alex Smith"
              name="name"
              value={this.state.name}
              errorText={this.state.nameError}
              onChange={this.handleChange}
            />
          </div>
          <p className="help is-danger"> {this.state.nameError} </p>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className={`input ${this.state.emailError ? "is-danger" : ""}`}
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
              name="email"
              value={this.state.email}
              errorText={this.state.emailError}
              onChange={this.handleChange}
            />
          </div>
          <p className="help is-danger"> {this.state.emailError} </p>
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
          {this.state.status === LOADING ? (
            <button
              onClick={this.handleSubmit}
              className="button is-primary"
              disabled
            >
              Sending...
            </button>
          ) : (
            <button onClick={this.handleSubmit} className="button is-primary">
              Submit
            </button>
          )}
        </div>
        <div
          className={`modal ${
            this.state.status === SUCCESS ? "is-active" : ""
          }`}
        >
          <div className="modal-background" />
          <div className="modal-content">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Success</p>
              </header>
              <div className="card-content">
                Zach has been emailed and will be in touch with you shortly!
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={this.close}
          />
        </div>
        <div
          className={`modal ${
            this.state.status === FAILURE ? "is-active" : ""
          }`}
        >
          <div className="modal-background" />
          <div className="modal-content">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Failure</p>
              </header>
              <div className="card-content">
                We couldn't connect to the server. Please try again soon!
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={this.close}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
