import axios from "axios";
import React from "react";
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function UpdateStudent(){
    const {id}=useParams('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();
    function handleSubmit(event){
        event.preventDefault();

        axios.put('http://localhost:8081/update/'+id,{name,email})
        .then(res=>{
            console.log(res);
            navigate('/')

        }).catch(err=>console.log(err));
    }
    return (
       <div><div>
       <h3>CreateStudent</h3>
       <div className="d-flex vh-100 bg-primary justify-content-center align-iterms-center">
       <div className="w-60 bg-white rounded p-3">
           <form onSubmit={handleSubmit}>
           <div className="mb-2">
                   <label htmlFor="">id: </label>
                   <input type="number" placeholder="enter name" className="form-control"
                  
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
                   <button className=" btn btn-success"> update</button>
               </div>
           </form>
       </div>
   
   </div>


   </div></div>
    )
}

export default UpdateStudent;