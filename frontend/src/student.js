import React, { useEffect } from 'react'
import axios from 'axios'
import {useState} from 'react'
import {Link} from 'react-router-dom';
function Student(){
    const [student,setStudent]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setStudent(res.data))
        .catch(err=>console.log(err))
    },[])
    

   const handleDelete=async(id)=>{
    try{
        await axios.delete("http://localhost:8081/student/"+id);
        window.location.reload()
    }
    catch(err)
    {
        console.log(err);
    }
   }
    {

    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-iterms-center'>
            <div className='w-50 bg-white rounded'>

                <Link to="/CreateStudent"className='btn btn-success'>add + </Link>
                <table className="table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>age</th>
                        <table className="styled"></table>
                        <th>action</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            student.map((student,i)=>{
                                return <tr key={i}>
                                <td>
                                    {student.name}
                                </td>
                                <td>
                                   {student.email}
                                </td>
                                <td>
                                    {student.age}
                                </td> 
                                <td>
                 <Link to={`/update/${student.id}`} className='btn btn-success justify-content-eft'>update </Link>
                        <button className='btn btn-danger ms-2' onClick={e=>handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        })  
                    }
                    </tbody>
            </table>
            </div>
        </div>
    )
}
export default Student;