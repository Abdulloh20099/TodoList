import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';
function Home() {
    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    const handleDelete = (id) =>{
        dispatch(deleteUser({id:id}));

    }

  return (
    <div className='container'>
        <h2>Crud App with json-server</h2>
        <Link to="/create" className='btn btn-secces my-3'>Create +</Link>
        <table className="table">
           <thead className='table_ul'>
            <tr>
            <th className="table_li">Name</th>
            <th className="table_li">Email</th>
            <th className="table_li">Action</th>
            </tr>
           </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr className="table_ul2" key={index}>
                        <th className="table_li2">{user.name}</th>
                        <th className="table_li2">{user.email}</th>
                        <div>
                            <Link to={`/edit/${user.id}`} type='button' className='Edit_btn btn-sm btn-primary'>Edit</Link>
                            <button onClick={()=> handleDelete(user.id)} className='Del_btn btn-sm btn-primary ms-2'>Delete </button>
                        </div>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home