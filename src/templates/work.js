import React from "react";

export default ({ data }) => {
  console.log(data);
  const asdf = data.markdownRemark.frontmatter.attachments.map((ele)=>{
    return <img className="asdf" src={ele.publicURL} />
  })
  return <div className="container">{asdf}</div>;
};

export const query = graphql`
  query findMarkdown($name: String!) {
    markdownRemark(frontmatter: { path: { eq: $name } }) {
      frontmatter {
        title        
        attachments{
          publicURL
        }
      }
    }
  }
`;
