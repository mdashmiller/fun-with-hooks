import React from 'react'
import useForm from '../customHooks/useForm'

const Form = () => {
  const initialValues = {
    email: '',
    password: ''
  }

  const { values, handleSubmit, handleChange } = useForm(initialValues, login)

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
            value={values.email}
            required
          />
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
            value={values.password}
            required
          />
        </div>
      </div>
      <button className="button" type="submit">Login</button>
    </form>
  )
}

export default Form
