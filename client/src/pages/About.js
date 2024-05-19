import React from "react"
import Header from "../components/Header";
import "../styles/styles.css";

function About() {
    const [show, setShow] = React.useState(false);
    const [showResume, setShowResume] = React.useState(false);
  return (<>
    <div>
      <Header index="4" />
    </div>
    
    <div className="container">
        <div className = "d-flex flex-column min-vh-100">
    <br /><br />
        <h1> Namaste🙏! </h1><br />
        <p> I'm Abhijith Dameruppala, a highly motivated <mark>Data Scientist</mark> with a strong interest in <mark>Software Engineering.</mark></p>
        <p>I recently graduated with a Master's degree in Data Science from <mark><a href="https://bloomington.iu.edu/index.html" target="_blank" rel="noopener noreferrer">Indiana University - Bloomington</a></mark>. 
        And since my engineering from <mark><a href="https://vce.ac.in/" target="_blank" rel="noopener noreferrer">Vasavi College of Engineering</a></mark>, I have been gaining extensive knowledge in various aspects of Problem Solving, Data Science, Software Engineering, Advanced Database Technologies, and <u><span className="dsa" onClick={() => {setShowResume(!showResume);}}>more</span></u>. 
        </p>
        {showResume
        ? <div style={{ display: "flex", 
                        margin: "5px auto",
                        paddingBottom: "15px"}}>
        <a 
            href="https://drive.google.com/file/d/1HOUIQMRHxz7PwywHB93yWuwenC53jlh-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
                <button 
                    style={
                        {marginRight: "15px"}} 
                    className="btn btn-secondary btn-sm">
                    SDE Resume
                </button>
        </a>
        <a 
            href="https://drive.google.com/file/d/1S8vmomHmBlxCsH2EWuYFTfRf59pnE0dI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
                <button 
                    className="btn btn-secondary btn-sm">DS Resume
                </button>
        </a>
        </div>

        : null}
        
        <p>Additionally, I've had the opportunity to intern as a <mark>Front-End Web Developer</mark> at <mark><a href="https://lab.radicalai.app/" target="_blank" rel="noopener noreferrer">RadicalX</a></mark>, a New York based start-up company that enables developers from round the globe to learn, earn, and connect with other developers.
        This is where I honed my expertise in NextJS, React JS, Material UI, integrating APIs and collaborated with an amazing team using Git and GitHub for version control.</p>
        <p>My achievements include securing a <u><span className="dsa" onClick={() => {setShow(!show)}}>top position in a DSA hackathon</span></u>, leading the graphic designing team for Electrrico Revisita, and also Representing Electrical and Electronics department by being a part of the Code-Chef's Executive Team for Vasavi College chapter.</p>
        
        <p> I'm passionate about delivering innovative solutions and I'm excited to leverage my skills and dedication to contribute to the fields of data science and software development.</p>

        <p>Also I highly suggest you to checkout my projects and blogs!</p>

        {
            show
            ? <iframe 
                id="iframe"
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6987967580489625600" 
                height="380" 
                width="550" 
                frameborder="0" 
                title="Embedded post" />
            : null
        }
        
        
    </div> ;
    </div>

</>);
}

export default About;
