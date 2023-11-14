function ContactForm() {
  return (
    <div
      id="contact"
      className="row col-xl-8 border border-5 border-dark rounded-5 p-3 p-md-5 shadow mb-5 align-items-center"
    >
      <div className="col-md-6">
        <form name="contact" method="POST" data-netlify="true">
          <div className="row gtr-uniform gy-2 gy-mb-4">
            <div className="col-6 col-12-xsmall">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="col-6 col-12-xsmall">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="col-12">
              <label htmlFor="subject">Subject</label>
              <input
                className="form-control"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="col-12">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control md-textarea"
                name="message"
                id="message"
                placeholder="Message"
                rows={5}
              ></textarea>
            </div>
            <div className="col-12">
              <input
                type="submit"
                className="primary btn btn-primary"
                value="Send Message"
              />

              <input
                className="btn mx-2 mx-lg-4 btn-secondary"
                type="reset"
                value="Reset Form"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="col-4 mx-auto d-none d-md-block">
        <h3>get in touch</h3>
        <p>
          Want to see my resume? Have a project and want to collaborate? Need
          some help? Just what to say hi? Feel free to contact me, whether its
          about about tech, backyard gardening, games, or anything else.
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
