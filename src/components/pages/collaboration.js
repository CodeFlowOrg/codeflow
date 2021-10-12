import "../styles/contact.css";
import logo from "../../assets/logo.png";
import { SocialIcon } from "react-social-icons";

function Collaboration() {
  return (
    <div className="contact">
    
      <div className="contact__Packet">
        <h1> Contact Us </h1>{" "}
        <div className="contact__container">
          <div className="contactContainer__left">
            <div className="contactContainer__left-info">
              <h3> Any queries, feel free to Contact Us...! </h3>{" "}
              <p>
                {" "}
                <img height={250} src={logo} alt="logo" />{" "}
              </p>{" "}
            </div>{" "}
            <div className="contactContainer__leftIcons">
              <SocialIcon
                url="https://twitter.com/codefloworg"
                fgColor="#FFFFFF"
              />
              <SocialIcon
                className="id"
                url="https://www.youtube.com/channel/UCIsECRBRWOalTC51co-tJWg"
                fgColor="#FFFFFF"
              />
              <SocialIcon
                className="id1"
                url="https://www.linkedin.com/company/codefloworg/"
                fgColor="#FFFFFF"
              />
              <SocialIcon
                className="id3"
                url="https://t.me/joinchat/FdJhyMumJK5sryCv"
                fgColor="#FFFFFF"
                network="telegram"
              />
              <SocialIcon
                className="id2"
                url="https://github.com/codeflow201"
                fgColor="#FFFFFF"
                network="github"
              />
            </div>{" "}
          </div>{" "}
          <form action="https://formcarry.com/s/S2thQbCqEvW" method="POST">
            <div className="form__first">
              <div className="form__first-group">
                <label> First Name </label>{" "}
                <input name="firstname" type="text" />
              </div>{" "}
              <div className="form__first-group">
                <label> Last Name </label> <input name="lastname" type="text" />
              </div>{" "}
            </div>{" "}
            <div className="form__first">
              <div className="form__first-group">
                <label> E - Mail </label> <input name="email" type="email" />
              </div>{" "}
              <div className="form__first-group">
                <label> Phone - No </label> <input name="phone" type="tel" />
              </div>{" "}
            </div>{" "}
            <div className="form__first">
              <div className="form__first-group">
                <label> Message </label> <textarea name="message"> </textarea>{" "}
              </div>{" "}
            </div>{" "}
            <button type="submit" className="form__btn">
              {" "}
              Submit{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Collaboration;
