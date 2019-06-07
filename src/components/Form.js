import React from 'react'
import useForm from '../customHooks/useForm'
import validate from '../Utils/loginFormValidationRules'

const Form = () => {
  
  const {
    values,
    errors,
    handleSubmit,
    handleChange
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
    </form>
  )
}

export default Form
