import "./Contact.css"

function Contact() {
  return (
    <div className="contact-form" id="contact">
      <div className="formcontainer">
        <h1>Contact</h1>
        <div className="contents">
          <div className="form">
            <form>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name:"
                required
              />
              <input
                type="text"
                name="name"
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
        <p className="cp-text">
          © Copyright 2023 Albert Hoxha. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Contact
