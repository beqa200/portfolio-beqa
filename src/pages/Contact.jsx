import { Header, Footer } from "../components";
import { Wrapper3 } from "../styled-components";
import { github, twitter, linkedin } from "../assets";
import { useState } from "react";
const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <Wrapper3 isAppear={props.appear}>
      <Header setAppear={props.setAppear} />
      <div className="body">
        <div className="touch">
          <h1>Get in Touch</h1>
          <div>
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in Tbilisi. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <div className="icons">
        <a href="https://github.com/beqa200" target="_blank">
          <img src={github} />
        </a>
        <a href="https://twitter.com/BeqaMaisuradze7" target="_blank">
          <img src={twitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/beqa-maisuradze-76a730234/"
          target="_blank"
        >
          <img src={linkedin} />
        </a>
      </div>
          </div>
        </div>
        <div className="contact">
          <h1>Contact Me</h1>
          <form>
            <div className="name">
              <p>Name</p>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Jane Appleseed"
                required
              />
            </div>

            <div className="email">
              <p>Email Address</p>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="email@example.com"
                type="email"
                required
              />
            </div>

            <div className="message">
              <p>Message</p>
              <input
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="How can I help?"
                type="text"
              />
            </div>

            <button
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                if (name != "" && email != "" && text != "") {
                  props.setAppear(false);
                }
              }}
            >
              SEND MESSAGE
            </button>
          </form>
          
        </div>
        <h1 className="thank">Thank you!</h1>
      </div>

      <Footer setAppear={props.setAppear}/>
    </Wrapper3>
  );
};

export default Contact;
