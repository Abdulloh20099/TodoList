import React, { useState } from 'react'
import { addUser } from './UserReducer';
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name,setName] = useState ('');
    const [email,setEmail] = useState ('');
    const usersData = {name,email}
    const saveData = (usersData);
    localStorage.setItem('user',JSON.stringify(saveData))

    const users = useSelector((state)=>state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();



   

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
        navigate('/')
  
    }
    if(handleSubmit){
        const data = JSON.parse(localStorage.getItem('user'))||[];
        console.log(data);


    }
  

      
  return  (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border  text-white p-5 '> 
        <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input  required type="text" name='name' className='form-control' value={name}  placeholder='Enter name' onChange={e=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input required type="email" name='email' className='form-control' value={email} placeholder='Enter email' onChange={e=>setEmail(e.target.value)} />
                </div><br />
                <button  className='btn btn-info' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
  
}


export default Create