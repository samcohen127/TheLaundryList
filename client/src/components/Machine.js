
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import splash from '../img/splash.jpg'
import RequestForm from './RequestForm'

const Machine = () => {
    const { id } = useParams()
    const [machine, setMachine] = useState([])
    const [contact, setContact] = useState(false)
    const navigate = useNavigate()

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8001/api/delete/${id}`)
            .then((res) => {
                console.log(res)
                navigate('/inventory')
            }).catch((err) => {
                console.log(err)
            })
    }

    const requestHandler = (e) => {
        e.preventDefault()
        setContact(true)
    }

    useEffect(() => {
        axios.get(`http://localhost:8001/api/findById/${id}`)
            .then((res) => {
                console.log(res.data)
                setMachine(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='py-10'> 
            <div className='m-6'>
                <div className="flex p-6 font-mono flex-">
                    <div className="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
                        <img src={splash} alt="" className="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" />
                    </div>
                    <form className="flex-auto pl-6">
                        <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                            <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                                {machine.year} {machine.manufacturer} {machine.description}
                            </h1>
                            <div>
                                <div className="relative text-lg text-white">
                                    We have {machine.quantity}
                                </div>
                                <div className="relative uppercase text-teal-400 ml-3">
                                    In stock
                                </div>

                            </div>
                            <div className="relative uppercase text-teal-400 ml-3">
                                Sample
                            </div>
                        </div>
                        <div className="flex space-x-2 mb-4 text-sm font-medium">
                            <div className="flex space-x-4">
                                <button onClick={requestHandler} className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" type="submit">
                                    Request Info!
                                </button>
                            </div>
                        </div>
                        <p className="text-xs leading-6 text-slate-500">
                            Feel free to ask how we can help with shipping.
                        </p>
                    </form>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-thin py-2 px-4 rounded' onClick={(e) => deleteHandler(machine._id)}>Remove from Inventory!</button>
            </div>
            {contact ? <RequestForm contact={contact}/> : null}
        </div>
    )
}

export default Machine
