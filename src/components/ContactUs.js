import React, { useState } from 'react'
import { Grow, Container, TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './ContactStyle'
import Card from './Card';
import './styles/Card.css'


const ContactUs = () => {
    const classes = useStyles();

    const [postData, setPostData] = useState({ name: '', email: '', message: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        setPostData(e.target.value);
        console.log(postData);
    }
    return (
        <Container>
            <Container className={ classes.container }>

                <Grow in>
                    <Paper className={ classes.paper } elevation={ 3 } >
                        <form autoComplete="off" noValidate className={ `${classes.root} ${classes.form}` }>
                            <Typography variant="h6">Contact Us
            </Typography>

                            <TextField name="name" variant="outlined" label="Name" fullWidth onChange={ (e) => setPostData({ ...postData, name: e.target.value }) } />

                            <TextField name="email" variant="outlined" label="Email" fullWidth onChange={ (e) => setPostData({ ...postData, email: e.target.value }) } />

                            <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={ 4 } onChange={ (e) => setPostData({ ...postData, message: e.target.value }) } />



                            <Button classes={ { contained: classes.btnCol, label: classes.label } } variant="contained" size="large" type="submit" onClick={ handleSubmit } fullWidth>Submit</Button>

                            <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
                        </form>
                    </Paper >

                </Grow>

            </Container>

            <Card />
        </Container>
    )
}

export default ContactUs
