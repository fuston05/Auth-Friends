import React, {useState, useEffect} from 'react';

//utils
import {axiosWithAuth} from '../../utils/axiosWithAuth';

//components
import Friend from './Friend/Friend';

//styles
import './Friends.scss';

const Friends = () => {
  const [friends, setFriends]= useState([]);
  const credentials= window.localStorage.getItem('token');

  useEffect(() => {
    axiosWithAuth()
    .get('/api/friends', credentials)
    .then(res => {
      setFriends([
        ...friends, ...res.data
      ])
      console.log('friends res.data: ',res.data);
    })
    .catch(err => {console.log(err);})
  }, [])

  return (
    <div className= 'friendsCont'>
      {console.log('friends from state: ', friends)}
      <Friend friends= {friends} />
    </div>
  )
}

export default Friends;