export default function validator(values){
    let errors={}
    if(!values.firstname.trim()){
        errors.firstname = 'Firstname required'
    }
    if(!values.lastname.trim()){
        errors.lastname = 'Lastname required'
    }
    if(!values.email.trim()){
        errors.email = 'Email required'
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      if(values.phone.length < 10){
          errors.phone = 'Phone no is incorrect'
      }
      if(!values.message.trim()){
          errors.message='Message required'
      }
  return errors;
}