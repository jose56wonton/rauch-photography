import React, { Component } from "react";
import Link from "gatsby-link";
import Modal from "../components/modal";
import Input from "../components/input";
import TextArea from "../components/textArea";
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
    console.log(props.data.allMarkdownRemark.edges[0].node.frontmatter);
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
  closeModal = () => {
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
    const {
      nameLabel,
      namePlaceholder,
      emailLabel,
      emailPlaceholder,
      messageLabel,
      messagePlaceholder,
      buttonLabel
    } = this.props.data.allMarkdownRemark.edges[0].node.frontmatter;
    return (
      <div className="container contact-height">
        <div className="contact-spacer" />
        <Input
          label={nameLabel}
          placeholder={namePlaceholder}
          className="input"
          error={this.state.nameError}
          value={this.state.name}
          name="name"
          handleChange={this.handleChange}
          type="text"
        />
        <Input
          label={emailLabel}
          placeholder={emailPlaceholder}
          className="input"
          error={this.state.emailError}
          value={this.state.email}
          name="email"
          handleChange={this.handleChange}
          type="text"
        />
        <TextArea
          label={messageLabel}
          placeholder={messagePlaceholder}
          className="textarea"
          error={""}
          value={this.state.message}
          name="message"
          handleChange={this.handleChange}
          type="textarea"
        />

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
              {buttonLabel}
            </button>
          )}
        </div>
        <Modal
          formStatus={this.state.status}
          modalType={SUCCESS}
          title="Success"
          message="Zach has been emailed and will be in touch with you shortly!"
          close={this.closeModal}
        />
        <Modal
          formStatus={this.state.status}
          modalType={FAILURE}
          title="Failure"
          message="We couldn't connect to the server. Please try again soon!"
          close={this.closeModal}
        />
      </div>
    );
  }
}
export default Contact;

export const query = graphql`
  query contactQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "contact" } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            nameLabel
            namePlaceholder
            emailLabel
            emailPlaceholder
            messageLabel
            messagePlaceholder
            buttonLabel
          }
        }
      }
    }
  }
`;
