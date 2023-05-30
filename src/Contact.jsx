import React , {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Contact = () => {

  const [form , setForm] = useState({
    fullName : "",
    email : "",
    contact : "",
    message : ""
  })

  const inputEvent = (e) =>
  {
    const name = e.target.name;
    const value = e.target.value;
    setForm((oldValue)=>{
      return (
        {
          ...oldValue,
          [name] : value
        }
      )
    })
  }

  const submitForm= (e) =>
  {
    e.preventDefault();
    if(form.fullName !== "" && form.email !== "" && form.contact !== "" && form.message !== "")
    {
      const text = `form submitted , your name : ${form.fullName} , your email : ${form.email} , your phone number : ${form.contact} , your message : ${form.message}`
      alert(text); 
    }
  }

  return (
    <>
      <form component="form" className='form__div' onSubmit={submitForm}>
        <h1 className='text-center'>Contact Us</h1>
        <Box sx={{ my: 3}}>
        
        <TextField sx={{ my: 1}} fullWidth label="Full Name" id="fullWidth" value={form.fullName} onChange={inputEvent} name="fullName" />

        <TextField sx={{ my: 1}} fullWidth label="Email Address" id="fullWidth" value={form.email} onChange={inputEvent} name="email" />

        <TextField sx={{ my: 1}} fullWidth label="Contact Number" id="fullWidth" value={form.contact} onChange={inputEvent} name="contact" />

        <TextField sx={{ my: 1}} fullWidth label="Message" id="fullWidth" value={form.message} onChange={inputEvent} name="message" multiline rows={5} />

        </Box>
        <button className='btn__submit p-3'>Submit Form</button>
      </form>
    </>
  )
}

export default Contact