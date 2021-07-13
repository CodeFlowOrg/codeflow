import "../styles/contact.css";
import Customnav from "../layout/customnavbar";
import {
    FaLinkedin,
    FaGithubSquare,
    FaTwitterSquare,
    FaYoutube,
    FaTelegram,
} from "react-icons/fa";
import useForm from '../hooks/useForm'
import validator from '../utilities/validator'
// import { Card } from "react-bootstrap";

function Collaboration() {


    return ( <
        div className = "contact" >
        <
        Customnav color = "#01bfd9"
        height = "50px"
        padding = "5vh" / >
        <
        div className = "contact__Packet" >
        <
        h1 > Contact Us < /h1> <
        div className = "contact__container" >
        <
        div className = "contactContainer__left" >
        <
        div className = "contactContainer__left-info" >
        <
        h4 > Contact Information < /h4> <
        p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur magnam quis autem inventore laboriosam dicta dolorem error ea, suscipit nobis ut, similique velit vitae explicabo. < /p> < /
        div > <
        div className = "contactContainer__leftIcons" >
        <
        a href = "https://github.com/codeflow201"
        target = "_blank"
        rel = "noreferrer"
        className = 'contactContainer__leftIcon' >
        <
        FaGithubSquare className = 'contact__icon'
        size = { 23.5 }
        /> < /
        a > <
        a href = "https://www.linkedin.com/company/codefloworg/"
        target = "_blank"
        rel = "noreferrer"
        className = 'contactContainer__leftIcon' >
        <
        FaLinkedin className = 'contact__icon'
        size = { 23.5 }
        /> < /
        a > <
        a href = "https://twitter.com/codefloworg"
        target = "_blank"
        rel = "noreferrer"
        className = 'contactContainer__leftIcon' >
        <
        FaTwitterSquare className = 'contact__icon'
        size = { 23.5 }
        /> < /
        a > <
        a href = "https://www.youtube.com/channel/UCIsECRBRWOalTC51co-tJWg"
        target = "_blank"
        rel = "noreferrer"
        className = 'contactContainer__leftIcon' >
        <
        FaYoutube className = 'contact__icon'
        size = { 23.5 }
        /> < /
        a > <
        a href = "https://t.me/joinchat/FdJhyMumJK5sryCv"
        target = "_blank"
        rel = "noreferrer"
        className = 'contactContainer__leftIcon' >
        <
        FaTelegram className = 'contact__icon'
        size = { 23.5 }
        /> < /
        a > <
        /div> < /
        div > <
        form action = "https://formcarry.com/s/S2thQbCqEvW"
        method = "POST" >
        <
        div className = "form__first" >
        <
        div className = "form__first-group" >
        <
        label > First Name < /label> <
        input name = 'firstname'
        type = "text" / >

        <
        /div> <
        div className = "form__first-group" >
        <
        label > Last Name < /label> <
        input name = 'lastname'
        type = "text" / >
        <
        /div> < /
        div > <
        div className = "form__first" >
        <
        div className = "form__first-group" >
        <
        label > E - Mail < /label> <
        input name = 'email'
        type = "email" / >
        <
        /div> <
        div className = "form__first-group" >
        <
        label > Phone - No < /label> <
        input name = 'phone'
        type = "tel" / >
        <
        /div> < /
        div > <
        div className = "form__first" >
        <
        div className = "form__first-group" >
        <
        label > Message < /label> <
        textarea name = 'message' > < /textarea> < /
        div > <
        /div> <
        button type = 'submit'
        className = 'form__btn' > Submit < /button> < /
        form > <
        /div> < /
        div > <
        /div>
    );
}

export default Collaboration;