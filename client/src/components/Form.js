import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [errors, setErrors] = useState({})
    const [obj, setObj] = useState({
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
    })
    
    const handleChange = (e) =>{
        setObj({
            ...obj,[e.target.name]:e.target.value
        })
    }

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(obj)
        axios.post(('http://localhost:8001/api/addMachine'), {
            obj
        }, ).then((res) => { //{ withCredentials: true }
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
            <form onSubmit={submitHandler} className='flex flex-col p-2 font-thin'>
                <label>Year</label>
                <input className='w-auto border border-gray-400' type="number" name='year' onChange={handleChange} value={obj.year}/>
                {errors.year ? <span className=''>{errors.year.message}</span> : null}
                <br />
                <label>Manufacturer</label>
                <input className='border border-gray-400' type="text" name='manufacturer' onChange={handleChange} value={obj.manufacturer}/>
                {errors.manufacturer ? <span className=''>{errors.manufacturer.message}</span> : null}
                <br />
                <label>Description</label>
                <input className='border border-gray-400' type="text" name='description' onChange={handleChange} value={obj.description}/>
                {errors.description ? <span className=''>{errors.description.message}</span> : null}
                <br />
                <label>Model Number</label>
                <input className='border border-gray-400' type="text" name='modelNumber' onChange={handleChange} value={obj.modelNumber}/>
                {errors.modelNumber ? <span className=''>{errors.modelNumber.message}</span> : null}
                <br />
                <label>Serial Number</label>
                <input className='border border-gray-400' type="text" name='serialNumber' onChange={handleChange} value={obj.serialNumber}/>
                {errors.serialNumber ? <span className=''>{errors.serialNumber.message}</span> : null}
                <br />
                <label>Category</label>
                <select className='border border-gray-400' type="text" name='category' onChange={handleChange} value={obj.category}>
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
                <input className='border border-gray-400' type="number" name='quantity' onChange={handleChange} value={obj.quantity}/>
                {errors.quantity ? <span className=''>{errors.quantity.message}</span> : null}
                <br />
                <label>Voltage</label>
                <input className='border border-gray-400' type="text" name='voltage' onChange={handleChange} value={obj.voltage}/>
                {errors.voltage ? <span className=''>{errors.voltage.message}</span> : null}
                <br />
                <label>Owner</label>
                <input className='border border-gray-400' type="text" name='owner' onChange={handleChange} value={obj.owner}/>
                {errors.owner ? <span className=''>{errors.owner.message}</span> : null}
                <br />
                <label>Contact Info</label>
                <input className='border border-gray-400' type="text" name='contact' onChange={handleChange} value={obj.contact}/>
                {errors.contact ? <span className=''>{errors.contact.message}</span> : null}
                <br />
                <label>Location</label>
                <input className='border border-gray-400' type="text" name='location' onChange={handleChange} value={obj.location}/>
                {errors.location ? <span className=''>{errors.location.message}</span> : null}
                <br />
                <label>H/L</label>
                <input className='border border-gray-400' type="text" name='highLow' onChange={handleChange} value={obj.highLow}/>
                {errors.highLow ? <span className=''>{errors.highLow.message}</span> : null}
                <br />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-thin py-2 px-4 rounded'>Submit</button>
            </form>
        </div>
    )
}

export default Form

