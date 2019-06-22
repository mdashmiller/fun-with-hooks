import React from 'react'
import useForm from '../../customHooks/useForm'
import validate from '../../Utils/loginFormValidationRules'
import './index.scss'
import { spawn } from 'child_process';

const Form = () => {
  
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    isSubmitting
  } = useForm(login, validate)

  function login() {
    console.log(values)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Email Address</label>
        <div className="control">
          <input
            className="input"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            required
          />
          {errors.email && (
            <p>{errors.email}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password || ''}
            required
          />
        </div>
      </div>
      <button className="button" type="submit">Login</button>
      {isSubmitting && Object.keys(errors).length === 0 ? (
        <p>Submitting...</p>
      ) : (
        null
      )}
    </form>
  )
}

export default Form
