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
import styled from 'styled-components'

function Contact() {
    return (
        <div style={ { backgroundColor: '#12232d' } }>
            <Customnav color="#01bfd9" height="50px" padding="5vh" />
            <Hide>
                <Title>

                    <h2>Get in touch.</h2>
                </Title>
            </Hide>
            <ContactUs />

        </div>
    );
}


const Title = styled.div`
  margin-top : 2rem;
  color: #fff;

`;
const Hide = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
export default Contact;
