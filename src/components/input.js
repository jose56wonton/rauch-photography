import React from 'react'

export const Input = (props) => {
  return(
    <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
      <input
        className={`input ${props.error ? "is-danger" : ""}`}
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

export default Input


