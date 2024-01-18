import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateStudent(){

    const [name, setName]=useState('')
    const[id,setId]=useState('')
    const [email,setEmail]=useState('')
    const navigate=useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create',{id,name,email})
        .then(res=>{
            console.log(res);
            navigate('/');
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <h3>CreateStudent</h3>
            <div className="d-flex vh-100 bg-primary justify-content-center align-iterms-center">
            <div className="w-60 bg-white rounded p-3">


                <form onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">id: </label>
                        <input type="number" placeholder="enter name" className="form-control"
                       onChange={e=>setId(e.target.value)}
                       />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="enter name" className="form-control"
                        onChange={e=>setName(e.target.value)}

                      />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">email</label>
                        <input type="text" placeholder="enter email" className="form-control"
                            onChange={e=>setEmail(e.target.value)}

                        />
                    </div>
                    <div>
                        <button className=" btn btn-success"> submit</button>
                    </div>
                </form>
            </div>
        
        </div>


        </div>

   )
}

export default CreateStudent;