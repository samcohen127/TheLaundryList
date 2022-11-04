import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Inventory = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8001/api/allMachines')
            .then((res) => {
                console.log(res)
                setList(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='flex flex-col content-center py-10'>
            <div className='flex justify-center'>
                <div className='mb-2'>
                    <h3>Complete Inventory</h3> <br /><br />
                    <table className=''>
                        <thead>
                            <th scope='col'>Name</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>Actions</th>
                        </thead>
                        <tbody>
                            {
                                list.map((machine, index) => (
                                    <tr key={index} className='font-thin'>
                                        <td>{machine.year} {machine.Manufacturer} {machine.description.substring(0, 50)}
                                            {
                                                (machine.description.length) > 51 ? <span>...</span> : null
                                            }
                                        </td>
                                        <td>{machine.category}</td>
                                        <td>
                                            <Link className='btn btn-secondary m-1' to={`/machine/${machine._id}`}>Details</Link>
                                            <Link className='btn btn-secondary' to={`/edit/${machine._id}`}>Edit</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-thin w-1/6 py-2 px-4 rounded' to={'/form'}>Add a machine</Link>
        </div>
    )
}

export default Inventory




