import styles from "./contact.module.css";
function Contact() {
  return (
    <div className={styles.contact}>
      <h2> Contact Us</h2> <br />
      <label htmlFor="name:">Name:</label>
      <input type="name" /> <br /> <br />
      <label htmlFor="email:">Email:</label>
      <input type="email" /> <br /> <br />
      <label htmlFor="feedback:">Feedback:</label>
      <textarea name="feedback" id="feedback" cols="30" rows="10">
        Feedback:
      </textarea>
      {/* <input type="feedback" /> */}
      <br></br> <br />
      <button className={styles.btn}>Submit</button>
    </div>
  );
}

export default Contact;
