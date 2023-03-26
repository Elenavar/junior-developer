import { useState } from "react"
import styles from '../../styles/components/Form.module.css'
const Form = () => {

  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorText, setErrorText] = useState(false)

  const [apiFetch, setApiFetch] = useState(false)


  const [user, setUser] = useState({
    treatment: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const validateForm = (name, value) => {
    if (name === 'name') {
      if (value.length < 3) {
        setErrorName(true)
      } else {
        setErrorName(false)
      }
    } else if (name === 'email') {
      const regExEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (!regExEmail.test(value) || value==='') {
        setErrorEmail(true)
      } else {
        setErrorEmail(false)
      }
    } else if (name === 'phone') {
      const regExPhone = /[0-9]{9}/;
      if (!regExPhone.test(value)) {
        setErrorPhone(true)
      } else {
        setErrorPhone(false)
      }
    } else if (name === 'message') {
      if (value.length < 10) {
        setErrorText(true)
      } else {
        setErrorText(false)
      }
    }
  }

  const handleForm = (ev) => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    validateForm(inputName, inputValue)
    setUser({ ...user, [inputName]: inputValue })
  }

  const errorMsg = (errorMsg, error) => {
    if (error) {
      return (errorMsg);
    }
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if(!errorEmail && !errorName && !errorPhone && !errorText){
      setApiFetch(false)
      fetch("/api/dataForm", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)})
      setUser({
        treatment: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    }else{
      setApiFetch(true)
    }
    }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <small className={styles.small}>{errorMsg('Please fill in all fields correctly', apiFetch)}</small>
      <div>
        <select onInput={handleForm} className={styles.select} name='treatment'>
          <option >Treatment</option>
          <option >Ms.</option>
          <option >Mr.</option>
        </select>
      </div>
      <div className={styles.fill}>
        <label className={styles.label} htmlFor="name"
        >Full name</label>
        <input
          placeholder="Full name"
          className={styles.input}
          value={user.name}
          id="name"
          type="text"
          name="name"
          required
          onInput={handleForm}
        />
        <small className={styles.small}>
          {errorMsg('Please enter a valid name', errorName)}</small>
      </div>
      <div className={styles.fill}>
        <label
          className={styles.label}
          htmlFor="email"
        >Email</label>
        <input
          placeholder="Email"
          className={styles.input}
          value={user.email}
          id="email"
          type="email"
          name="email"
          required
          onInput={handleForm}
        />
        <small className={styles.small}>
          {errorMsg('Please enter a valid email', errorEmail)}</small>
      </div>
      <div className={styles.fill}>
        <label className={styles.label} htmlFor="phone">Phone</label>
        <input
          placeholder="Phone"
          className={styles.input}
          value={user.phone}
          id="phone"
          type="tel"
          name="phone"
          onInput={handleForm}
        />
        <small className={styles.small}>
          {errorMsg('Please enter a valid phone', errorPhone)}</small>
      </div>
      <div className={styles.fill}>
        <label className={styles.label} htmlFor="message"
        >Message</label>
        <textarea
          placeholder="Message"
          className={styles.textarea}
          value={user.message}
          name="message"
          id="message"
          cols="25"
          rows="8"
          required
          onInput={handleForm}
        ></textarea>
        <small className={styles.small}>
          {errorMsg('Please enter at least 10 characters', errorText)}</small>
      </div>
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
}

export default Form;