import "./Contact.css"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Contact() {
  const notify = () =>
    toast.success("You send a message!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_6menagr",
        "template_5mugrgd",
        form.current,
        "wWc3BjjS4v8npxBCI"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    notify()
  }

  return (
    <div className="contact-form" id="contact">
      <div className="formcontainer">
        <h1>Contact</h1>
        <div className="contents">
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                id=""
                placeholder="Name:"
                required
              />
              <input
                type="text"
                name="user_email"
                id=""
                placeholder="Email:"
                required
              />
              <textarea
                name="message"
                id="text-area"
                cols="5"
                rows="4"
                placeholder="Message:"
                required
              ></textarea>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer">
        <div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
        <p className="cp-text">
          © Copyright 2023 Albert Hoxha. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Contact
