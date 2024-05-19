import React from "react"
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css";

function Contact() {
  return (<>
    <div>
      <Header index="3" />
    </div>
    
    <div className="container">
        <h1>Contact Me</h1>
        <div className="row justify-content-center">
            <iframe
              src="https://calendly.com/abhijithdameruppala"
              className="iframe"
              title="Calendly Scheduling"
            />
      </div>
    </div>

</>);
}

export default Contact;
