import { useState } from "react"
import "../styles/Home.module.sass"

export default function Home() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleForm = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    fetch("/api/dataForm",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)})
  }

  return (
    <div className="formPage">
      <form
        className="formPage__form"
        onSubmit={handleSubmit}
      >
        <div className="formPage__form--name name">
          <label className="name__label label" htmlFor="name"
          >Full name</label>
          <input
            className="name__input input"
            value={user.name}
            id="name"
            type="text"
            name="name"
            minLength="3"
            required
            onInput={handleForm}
          />
        </div>
        <div className="formPage__form--email email">
          <label
            className="email__label label"
            htmlFor="email"
          >Email</label>
          <input
            className="email__input input"
            value={user.email}
            id="email"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            onInput={handleForm}
          />
        </div>
        <div className="formPage__form--phone phone">
          <label className="phone__label label" htmlFor="phone">Phone</label>
          <input
            className="phone__input input"
            value={user.phone}
            placeholder="Ej: 123456789"
            id="phone"
            type="tel"
            name="phone"
            pattern="[0-9]{9}"
            onInput={handleForm}
          />
        </div>
        <div className="formPage__form--message message">
          <label className="message__label label" htmlFor="message"
          >Message</label>
          <textarea
            className="message__input input"
            value={user.message}
            name="message"
            id="message"
            cols="30"
            rows="8"
            minLength="10"
            required
            onInput={handleForm}
          ></textarea>
        </div>
        <button className="formPage__form--button" type="submit">Submit</button>
      </form>
    </div>
  );
}
