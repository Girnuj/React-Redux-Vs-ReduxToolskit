import React, { useEffect } from 'react'
import { fetchAllUsers } from './Redux-Toolkit/Slices/users/users'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers2 } from './Redux-Old/Reducer';

 
const UserList = () => {

  //Redux-ToolKit//////////////////////////////////
  const { list: allUsers } = useSelector(state => state.users)

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch])
//////////////////////////////////////////////////////

 //Redux-Old//////////////////////////////////////////
  const allUsers2 = useSelector(state => state.user2)

  useEffect(()=>{
    dispatch(fetchAllUsers2())
  }, [dispatch])
///////////////////////////////////////////////////////


  return (
    <div className='container mt-4'>
        <div className='row'>
          <h1>Redux-Toolskit</h1>
          {
            allUsers?.map((user, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className='card'>
                  <img src={user.avatar} alt="avatar" />
                  <div className='card-body'>
                    <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
                    <p className='card-text'>{user.email}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='row'>
          <h1>Redux-Old</h1>
          {
            allUsers2?.map((user, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className='card'>
                  <img src={user.avatar} alt="avatar" />
                  <div className='card-body'>
                    <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
                    <p className='card-text'>{user.email}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default UserList