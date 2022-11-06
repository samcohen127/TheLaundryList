import { useState, useReducer } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


const Register = () => {

    const [errors, setErrors] = useState('')
    const initialState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_USERNAME":
                return { ...state, username: action.payload }
            case "SET_EMAIL":
                return { ...state, email: action.payload }
            case "SET_PASSWORD":
                return { ...state, password: action.payload }
            case "SET_CONFIRM_PASSWORD":
                return { ...state, confirmPassword: action.payload }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
        e.preventDefault()
        switch (e.target.name) {
            case "username": dispatch({ type: "SET_USERNAME", payload: e.target.value }); break;
            case "email": dispatch({ type: "SET_EMAIL", payload: e.target.value }); break;
            case "password": dispatch({ type: "SET_PASSWORD", payload: e.target.value }); break;
            case "confirmPassword": dispatch({ type: "SET_CONFIRM_PASSWORD", payload: e.target.value }); break;
            default: return state
        }
    }


    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8001/api/register', {
            state
        }, { withCredentials: true, credentials: 'include' })
            .then((res) => {
                navigate('/home')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div className='py-10'>
            <h1 className='text-4xl font-thin'>Register for Movie DB</h1>
            <Link to='/login'>Already registered? Login Here</Link>
            <form className='flex flex-col p-2 font-thin' onSubmit={submitHandler}>
                <label >Username: </label>
                <input className='border border-gray-400' type="text" name='username' onChange={(e) => handleChange(e)} value={state.username} />
                <label >Email: </label>
                <input className='border border-gray-400' type="text" name='email' onChange={(e) => handleChange(e)} value={state.email} />
                <label >Password: </label>
                <input className='border border-gray-400' type="text" name='password' onChange={(e) => handleChange(e)} value={state.password} />
                <label >Confirm Pasword: </label>
                <input className='border border-gray-400' type="text" name='confirmPassword' onChange={(e) => handleChange(e)} value={state.confirmPassword} />
                {errors && errors.confirmPassword ? <span className='text-danger'>{errors.confirmPassword.message}</span> : null}
                <div>
                    <br />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-thin py-2 px-4 rounded'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register