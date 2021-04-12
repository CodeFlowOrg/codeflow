import {useState} from 'react'

const useForm = (validator) => {
    const[values, setValues] = useState({
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        message:''
    })
    const[errors, setErrors] = useState({})

const handleChange = (e)=>{
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
}
const handleSubmit =(e) =>{
    e.preventDefault();
    setErrors(validator(values))
}

return{handleChange , values, handleSubmit , errors}
}

export default useForm;