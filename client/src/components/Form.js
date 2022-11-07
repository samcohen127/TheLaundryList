import axios from 'axios'
import { useState, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [errors, setErrors] = useState({})
    const initialState = {
        year: '',
        manufacturer: '',
        category: '',
        description: '',
        modelNumber: '',
        serialNumber: '',
        quantity: '',
        voltage: '',
        owner: '',
        contact: '',
        location: '',
        highLow: '',
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_YEAR":
                return { ...state, year: action.payload }
            case "SET_MANUFACTURER":
                return { ...state, manufacturer: action.payload }
            case "SET_CATEGORY":
                return { ...state, category: action.payload }
            case "SET_DESCRIPTION":
                return { ...state, description: action.payload }
            case "SET_MODEL_NUMBER":
                return { ...state, modelNumber: action.payload }
            case "SET_SERIAL_NUMBER":
                return { ...state, serialNumber: action.payload }
            case "SET_QUANTITY":
                return { ...state, quantity: action.payload }
            case "SET_VOLTAGE":
                return { ...state, voltage: action.payload }
            case "SET_OWNER":
                return { ...state, owner: action.payload }
            case "SET_CONTACT":
                return { ...state, contact: action.payload }
            case "SET_LOCATION":
                return { ...state, location: action.payload }
            case "SET_HIGH_LOW":
                return { ...state, highLow: action.payload }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
        e.preventDefault()
        switch (e.target.name) {
            case "year": dispatch({ type: "SET_YEAR", payload: e.target.value }); break;
            case "manufacturer": dispatch({ type: "SET_MANUFACTURER", payload: e.target.value }); break;
            case "category": dispatch({ type: "SET_CATEGORY", payload: e.target.value }); break;
            case "description": dispatch({ type: "SET_DESCRIPTION", payload: e.target.value }); break;
            case "modelNumber": dispatch({ type: "SET_MODEL_NUMBER", payload: e.target.value }); break;
            case "serialNumber": dispatch({ type: "SET_SERIAL_NUMBER", payload: e.target.value }); break;
            case "quantity": dispatch({ type: "SET_QUANTITY", payload: e.target.value }); break;
            case "voltage": dispatch({ type: "SET_VOLTAGE", payload: e.target.value }); break;
            case "owner": dispatch({ type: "SET_OWNER", payload: e.target.value }); break;
            case "contact": dispatch({ type: "SET_CONTACT", payload: e.target.value }); break;
            case "location": dispatch({ type: "SET_LOCATION", payload: e.target.value }); break;
            case "highLow": dispatch({ type: "SET_HIGH_LOW", payload: e.target.value}); break;
            default: return state
        }
    }

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(('http://localhost:8001/api/addMachine'), {
            state
        },).then((res) => { //{ withCredentials: true }
            console.log(res)
            navigate('/inventory')
        }).catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div className='py-10'>
            <h1 className='text-4xl font-thin'>Add a new Machine</h1>
            <form onSubmit={submitHandler} className='flex flex-col p-2 font-thin' enctype='multipart/form-data'>
                <label>Year</label>
                <input className='w-auto border border-gray-400' type="number" name='year' onChange={(e) => handleChange(e)} value={state.year} />
                {errors.year ? <span className=''>{errors.year.message}</span> : null}
                <br />
                <label>Manufacturer</label>
                <input className='border border-gray-400' type="text" name='manufacturer' onChange={(e) => handleChange(e)} value={state.manufacturer} />
                {errors.manufacturer ? <span className=''>{errors.manufacturer.message}</span> : null}
                <br />
                <label>Description</label>
                <input className='border border-gray-400' type="text" name='description' onChange={(e) => handleChange(e)} value={state.description} />
                {errors.description ? <span className=''>{errors.description.message}</span> : null}
                <br />
                <label>Model Number</label>
                <input className='border border-gray-400' type="text" name='modelNumber' onChange={(e) => handleChange(e)} value={state.modelNumber} />
                {errors.modelNumber ? <span className=''>{errors.modelNumber.message}</span> : null}
                <br />
                <label>Serial Number</label>
                <input className='border border-gray-400' type="text" name='serialNumber' onChange={(e) => handleChange(e)} value={state.serialNumber} />
                {errors.serialNumber ? <span className=''>{errors.serialNumber.message}</span> : null}
                <br />
                <label>Category</label>
                <select className='border border-gray-400' type="text" name='category' onChange={(e) => handleChange(e)} value={state.category}>
                    <option value="Test">Select A Category</option>
                    <option value="washers">Washer - Extractors</option>
                    <option value="batchWashers">Batch Washers, Components, and Systems</option>
                    <option value="dryers">Dryers and Lint Traps</option>
                    <option value="ironers">Ironers</option>
                    <option value="flatwork">Flatwork</option>
                    <option value="garmentTunnels">Garment Finishing Tunnels, Curing Ovens, and Pressing Equipment</option>
                    <option value="materialHandling">Material Handling</option>
                    <option value="airCompressors">Air Compressors</option>
                    <option value="boilers">Boilers and Water Heating Systems</option>
                    <option value="wastewater">Wastewater</option>
                    <option value="misc">Misc.</option>
                    <option value="carts">Carts</option>
                </select>
                {errors.category ? <span className=''>{errors.category.message}</span> : null}
                <br />
                <label>Quantity</label>
                <input className='border border-gray-400' type="number" name='quantity' onChange={(e) => handleChange(e)} value={state.quantity} />
                {errors.quantity ? <span className=''>{errors.quantity.message}</span> : null}
                <br />
                <label>Voltage</label>
                <input className='border border-gray-400' type="text" name='voltage' onChange={(e) => handleChange(e)} value={state.voltage} />
                {errors.voltage ? <span className=''>{errors.voltage.message}</span> : null}
                <br />
                <label>Owner</label>
                <input className='border border-gray-400' type="text" name='owner' onChange={(e) => handleChange(e)} value={state.owner} />
                {errors.owner ? <span className=''>{errors.owner.message}</span> : null}
                <br />
                <label>Contact Info</label>
                <input className='border border-gray-400' type="text" name='contact' onChange={(e) => handleChange(e)} value={state.contact} />
                {errors.contact ? <span className=''>{errors.contact.message}</span> : null}
                <br />
                <label>Location</label>
                <input className='border border-gray-400' type="text" name='location' onChange={(e) => handleChange(e)} value={state.location} />
                {errors.location ? <span className=''>{errors.location.message}</span> : null}
                <br />
                <label>H/L</label>
                <input className='border border-gray-400' type="text" name='highLow' onChange={(e) => handleChange(e)} value={state.highLow} />
                {errors.highLow ? <span className=''>{errors.highLow.message}</span> : null}
                <br />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-thin py-2 px-4 rounded'>Submit</button>
            </form>
        </div>
    )
}

export default Form

