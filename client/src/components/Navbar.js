// import axios from 'axios'
import React from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom' //useNavigate

const Navbar = () => {
    // const navigate = useNavigate()
    // const logout = (e) => {
    //     axios.get('http://localhost:8001/api/logout', { withCredentials: true })
    //         .then((res) => {
    //             console.log('logged out')
    //             navigate('/register')
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    const navigate = useNavigate()

    const logout = (e) => {
        axios.get('http://localhost:8001/api/logout', { withCredentials: true })
            .then((res) => {
                console.log('logged out')
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='fixed'>
            <div className='box-content h-32 w-32 pt-3 px-3 mx-auto flex place-items-center'>
                <h1 className='text-indigo-500 text-7xl'>TLL</h1>
            </div>
            <div className='border '></div>
            <div className='flex flex-col font-light border-b text-sm'>
                {/* <button onClick={logout}>Logout</button> */}
                <NavLink to="/" className="m-3 pt-5 hover:font-normal">Home</NavLink>
                <NavLink to="/inventory" className="m-3 hover:font-normal" >Inventory</NavLink>
                <NavLink to="/service" className="m-3 hover:font-normal" >Service</NavLink>
                <NavLink to="/sell" className="m-3 hover:font-normal" >Sell</NavLink>
                <NavLink to="/buy" className="m-3 hover:font-normal" >Buy</NavLink>
                <NavLink to="/contact" className="m-3 hover:font-normal" >Contact</NavLink>
                <NavLink to="/About" className="m-3 hover:font-normal" >About</NavLink>
                <NavLink to="/login" className="m-3 hover:font-normal" >Login</NavLink>
                <button className="m-3 pb-5 hover:font-normal" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar