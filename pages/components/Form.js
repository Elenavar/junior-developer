import { useState } from "react"
import styles from '../../styles/components/Form.module.css'
const Form = () =>{
    const [user, setUser] = useState({
        treatment:'',
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    
      const handleForm = (ev) => {
        setUser({ ...user, [ev.target.name]: ev.target.value })
      }
    
      const select = (ev)=>{
    
        console.log(ev.target.name)
      }
    
      const handleSubmit = (ev) => {
        ev.preventDefault()
        fetch("/api/dataForm", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        })
      }

      return (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div>
                <select onInput={handleForm} className={styles.select} name='treatment'>
                  <option >Treatment</option>
                  <option >Ms.</option>
                  <option >Mr.</option>
                </select>
              </div>
              <div>
                <label className={styles.label} htmlFor="name"
                >Full name</label>
                <input
                  placeholder="Full name"
                  className={styles.input}
                  value={user.name}
                  id="name"
                  type="text"
                  name="name"
                  minLength="3"
                  required
                  onInput={handleForm}
                />
              </div>
              <div>
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
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                  onInput={handleForm}
                />
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
                  pattern="[0-9]{9}"
                  onInput={handleForm}
                />
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
                  minLength="10"
                  required
                  onInput={handleForm}
                ></textarea>
              </div>
            <button className={styles.button} type="submit">Submit</button>
          </form>
      );
}

export default Form;