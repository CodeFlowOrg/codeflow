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

import React from 'react'

function Contact() {
    const{handleChange, values , handleSubmit , errors} = useForm(validator)


  return (
    <div className="contact">
      <Customnav color="#01bfd9" height="50px" padding="5vh" />
      <div className="contact__Packet">
          <h3>Want to Open Source? Collaborate? or maybe report a bug?</h3>
      <h1>Contact Us</h1>
<div className="contact__container">
  <div className="contactContainer__left">
    <div className="contactContainer__left-info">
    <h4>Contact Information</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam quis autem inventore laboriosam dicta dolorem error ea, suscipit nobis ut, similique velit vitae explicabo.</p>
    </div>
    <div className="contactContainer__leftIcons">
      <a href="https://github.com/codeflow201" target="_blank" rel="noreferrer" className='contactContainer__leftIcon'>
      <FaGithubSquare className='contact__icon' size={23.5}  />
      </a>
      <a href="https://www.linkedin.com/company/codefloworg/" target="_blank" rel="noreferrer" className='contactContainer__leftIcon'>
      <FaLinkedin className='contact__icon' size={23.5} />
      </a>
      <a href="https://twitter.com/codefloworg" target="_blank" rel="noreferrer" className='contactContainer__leftIcon'>
      <FaTwitterSquare className='contact__icon' size={23.5}  />
      </a>
      <a    href="https://www.youtube.com/channel/UCIsECRBRWOalTC51co-tJWg"
          target="_blank" rel="noreferrer" className='contactContainer__leftIcon'>
      <FaYoutube className='contact__icon' size={23.5}  />
      </a>
      <a href="https://t.me/joinchat/FdJhyMumJK5sryCv" target="_blank" rel="noreferrer" className='contactContainer__leftIcon'>
      <FaTelegram  className='contact__icon' size={23.5} />
      </a>
    </div>
  </div>
 <form onSubmit={handleSubmit}>
   <div className="form__first">
     <div className="form__first-group">
       <label>First Name </label>
         <input onChange={handleChange} value={values.firstname} name='firstname' type="text"/>
         {errors.firstname && <p>{errors.firstname}</p>}
     </div>
     <div className="form__first-group">
       <label>Last Name </label>
         <input onChange={handleChange} value={values.lastname} name='lastname' type="text"/>
         {errors.lastname && <p>{errors.lastname}</p>}
     </div>
   </div>
   <div className="form__first">
     <div className="form__first-group">
       <label>E-Mail </label>
         <input onChange={handleChange} value={values.email} name='email' type="email"/>
         {errors.email && <p>{errors.email}</p>}
     </div>
     <div className="form__first-group">
       <label>Phone-No </label>
         <input onChange={handleChange} value={values.phone} name='phone' type="tel"/>
         {errors.phone && <p>{errors.phone}</p>}
     </div>
   </div>
   <div className="form__first">
     <div className="form__first-group">
       <label>Message </label>
      <textarea onChange={handleChange} value={values.message} name='message'></textarea>
      {errors.message && <p>{errors.message}</p>}
     </div>
   </div>
   <button type='submit' className='form__btn'> Submit</button>
 </form>
</div>
</div>
    </div>
  );
}

export default Contact;
