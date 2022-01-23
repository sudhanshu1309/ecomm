import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="button">
          <Link to="/">
            <input
              className="btn-primary rounded ml-3 my-2"
              style={{ float: "right" }}
              type="button"
              value="Home"
            />
          </Link>
        </div>
        <div className="left-side">
          <div className="address details">
            {/* <i className="fas fa-map-marker-alt"></i> */}
            <div className="topic mt-3">Address</div>
            <div className="text-one">IIIT-NR</div>
            <div className="text-two mb-4">Naya Raipur CG, 493661</div>
          </div>
          <div className="phone details">
            {/* <i className="fas fa-phone-alt"></i> */}
            <div className="topic">Phone</div>
            <div className="text-one">+91 9696 800 234</div>
            <div className="text-two mb-4"></div>
          </div>
          <div className="email details">
            {/* <i className="fas fa-envelope"></i> */}
            <div className="topic">Email</div>
            <div className="text-one">sudhanshutripathi008@gmail.com</div>
            <div className="text-two mb-4 ">sudhanshu20101@iiitnr.edu.in</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text my-1">Send us a message</div>
          <p>
            If you have any work from me, any suggestions or any types of quries
            related to my website, you can send me message from here. It's my
            pleasure to help you.
          </p>
          <form action="#">
            <div className="input-box my-1">
              <input
                className="px-2 rounded"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="input-box my-1">
              <input
                className="px-2 rounded"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="input-box message-box"></div>
            <div className="input-box my-1">
              <textarea
                className="px-2 rounded"
                type="text"
                placeholder="Your message"
                cols={21}
              />
            </div>
            <div className="button">
              <Link to="/">
                <input
                  className="btn-success rounded px-1"
                  type="button"
                  value="Send Now"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
