import "./styles/contact.css";
import Customnav from "./customnavbar";
import {
    FaLinkedin,
    FaGithubSquare,
    FaTwitterSquare,
    FaYoutube,
    FaTelegram,
} from "react-icons/fa";
import { Card } from "react-bootstrap";
import ContactUs from './ContactUs'

function Contact() {
    return (
        <div>
            <Customnav color="#01bfd9" height="50px" padding="5vh" />
            <ContactUs />
            <div className="nhi-custom">
                <a href="https://github.com/codeflow201" target="_blank">
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Text>
                                <div className="m-1">
                                    <FaGithubSquare className="nav-dynamic-button" size={ 40 } />{ " " }
                  Github
                </div>
                Check out our GitHub repository to see our project boards, code
                and spike reports.
              </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a
                    href="https://www.youtube.com/channel/UCIsECRBRWOalTC51co-tJWg"
                    target="_blank"
                >
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Text>
                                <div className="m-1">
                                    <FaYoutube className="nav-dynamic-button" size={ 40 } /> Youtube
                </div>
                Check out our videos.
              </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a href="https://www.linkedin.com/company/codefloworg/" target="_blank">
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Text>
                                <div className="m-1">
                                    <FaLinkedin className="nav-dynamic-button" size={ 40 } /> Linked
                  in
                </div>
                Check out , our linked in.!!
              </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a href="https://twitter.com/codefloworg" target="_blank">
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Text>
                                <div className="m-1">
                                    <FaTwitterSquare className="nav-dynamic-button" size={ 40 } />{ " " }
                  Twitter
                </div>
                See our latest tweets .!!
              </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a href="https://t.me/joinchat/FdJhyMumJK5sryCv" target="_blank">
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Text>
                                <div className="m-1">
                                    <FaTelegram className="nav-dynamic-button" size={ 40 } />{ " " }
                  Telegram
                </div>
                Join us on Telegram !!
              </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </div>
        </div>
    );
}

export default Contact;
