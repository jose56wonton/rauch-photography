import React from 'react'

export const TextArea = (props) => {
  return(
    <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
      <textarea
        className={`textarea ${props.error ? "is-danger" : ""}`}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
    <p className="help is-danger"> {props.error} </p>
  </div>
  )
}

export default TextArea

