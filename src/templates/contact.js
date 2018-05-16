import React, { Component } from "react";
import Link from "gatsby-link";
import Modal from "../components/modal";
import Input from "../components/input";
import TextArea from "../components/textArea";
const INITIAL = "initial";
const LOADING = "loading";
const FAILURE = "failure";
const SUCCESS = "success";
import Img from "gatsby-image";
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
    console.log(event.target.name);
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
    let {name,email} = this.state;
    name = name.trim();
    email = email.trim();
    if (name.indexOf(" ") === -1 || name.length < 6) {
      isError = true;
      errors.nameError = "Enter both a first and last name";
    }
    if (!nameReg.exec(name)) {
      isError = true;
      errors.nameError = "Invalid Name";
    }
    // Email validation
    if (!emailReg.exec(email)) {
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
      buttonLabel,
      image1,
      image2,
      image3,
      email,
      phone,
      location
    } = this.props.data.allMarkdownRemark.edges[0].node.frontmatter;

    return (
      <div className="contact">
        <div className="contact-spacer" />
        <div className="columns contact-row-1">
          <div className="column is-hidden-mobile is-12-mobile is-5-tablet is-4-desktop  contact-image-wrapper-1">
            <Img
              sizes={image1.childImageSharp.sizes}
              className="contact-image"
            />
          </div>
          <div className="contact-text-wrapper-1 column is-12-mobile is-7-tablet is-5-desktop ">
            <div>
              <p className="contact-title">Contact</p>
              <p className="contact-text"># {phone}</p>
              <p className="contact-text">@ {email}</p>
            </div>
          </div>
          <div className="column is-hidden-touch is-3-desktop  contact-image-wrapper-2">
            <Img
              sizes={image2.childImageSharp.sizes}
              className="contact-image"
            />
          </div>
        </div>
        <div className="columns contact-row-2">
          <div className="column is-12-mobile is-8-tablet is-5-desktop is-offset-1-desktop contact-text-wrapper-2">
            <div>
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
                gat
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
                value={this.state.message}
                name="message"
                handleChange={this.handleChange}
                type="textarea"
              />

              <a
                onClick={this.handleSubmit}
                className="underline-inverse"
                name="submit"
              >
                <span /> Send
              </a>
            </div>
          </div>

          <div className="column is-hidden-mobile is-5-tablet is-6-desktop contact-image-wrapper-3">
            <Img
              sizes={image3.childImageSharp.sizes}
              className="contact-image"
            />
          </div>
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
            email
            phone
            location
            image1 {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            image2 {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            image3 {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;

// logo: imageSharp(id: { regex: "/drake/center/" }) {
//   sizes(maxWidth: 1240 ) {
//     ...GatsbyImageSharpSizes
//   }
//   resolutions {
//     ...GatsbyImageSharpResolutions
//   }
// }
