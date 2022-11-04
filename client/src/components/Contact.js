import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { send } from 'emailjs-com'

const Contact = () => {
  const [errors, setErrors] = useState({})
  const [obj, setObj] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    note: '',
  })

  const handleChange = (e) => {
    setObj({
      ...obj, [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  const sendEmail = () => {
    send(
      'service_jn5wtme',
      'template_fosgb6j',
      obj,
      'oAQ_-iUUaC51q0nYx'
    )
      .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }

  const submitHandler = (e) => {
    e.preventDefault()
    sendEmail()
    axios.post(('http://localhost:8001/api/addContact'), {
      obj
    },).then((res) => { //{ withCredentials: true }
      console.log(res)
      navigate('/home')
    }).catch((err) => {
      console.log(err)
      setErrors(err.response.data.errors)
    })
  }

  return (
    <div className='py-10'>
      <h1>Contact</h1>
      <form onSubmit={submitHandler} className='flex flex-col p-2'>
        <label>Name</label>
        <input className='border border-gray-400' type="text" name='name' onChange={handleChange} value={obj.name} />
        {errors.name ? <span className=''>{errors.name.message}</span> : null}
        <br />
        <label>Company</label>
        <input className='border border-gray-400' type="text" name='company' onChange={handleChange} value={obj.company} />
        {errors.company ? <span className=''>{errors.company.message}</span> : null}
        <br />
        <label>Email</label>
        <input className='border border-gray-400' type="text" name='email' onChange={handleChange} value={obj.email} />
        {errors.email ? <span className=''>{errors.email.message}</span> : null}
        <br />
        <label>Phone</label>
        <input className='border border-gray-400' type="text" name='phone' onChange={handleChange} value={obj.phone} />
        {errors.phone ? <span className=''>{errors.phone.message}</span> : null}
        <br />
        <label>Note</label>
        <input className='border border-gray-400' type="text" name='note' onChange={handleChange} value={obj.note} />
        {errors.note ? <span className=''>{errors.note.message}</span> : null}
        <br />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-thin py-2 px-4 rounded w-1/6'>Submit</button>
      </form>
    </div>
  )
}

export default Contact

