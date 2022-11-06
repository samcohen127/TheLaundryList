import { useReducer } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const initialState = {
        email: '',
        password: '',
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_EMAIL":
                return { ...state, email: action.payload }
            case "SET_PASSWORD":
                return { ...state, password: action.payload }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
        e.preventDefault()
        switch (e.target.name) {
            case "email": dispatch({ type: "SET_EMAIL", payload: e.target.value }); break;
            case "password": dispatch({ type: "SET_PASSWORD", payload: e.target.value }); break;
            default: return state
        }
    }
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8001/api/login', {
            state
        }, { withCredentials: true, credentials: 'include' })
            .then((res) => {
                navigate('/home')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='py-10'>
            <h1 className='text-4xl font-thin'>Login to TheLaundryList.com</h1>
            <Link to='/register'>Need to register?</Link>

            <form className='flex flex-col p-2 font-thin' onSubmit={submitHandler}>
                <label >Email: </label>
                <input className='border border-gray-400' type="text" name='email' onChange={(e) => handleChange(e)} value={state.email} />
                <br />
                <label >Password: </label>
                <input className='border border-gray-400' type="text" name='password' onChange={(e) => handleChange(e)} value={state.password} />
                <br />
                <div>
                    <br />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-thin py-2 px-4 rounded'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login