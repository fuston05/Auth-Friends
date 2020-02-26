import React, {useState, useEffect} from 'react';

//utils
import {axiosWithAuth} from '../../utils/axiosWithAuth';

//components
import Friend from './Friend/Friend';
import AddFriendForm from '../AddFriendForm/AddFriendForm';

//styles
import './Friends.scss';

const Friends = () => {
  const [friends, setFriends]= useState([]);
  const credentials= window.localStorage.getItem('token');
  const [showAddFriend, setShowAddFriend]= useState(false);

  const fetchFriends= () => {
    axiosWithAuth()
    .get('/api/friends', credentials)
    .then(res => {
      setFriends([
        ...friends, ...res.data
      ])
      console.log('friends res.data: ',res.data);
    })
    .catch(err => {console.log(err);})
  }//end fetchFriends

  useEffect(() => {
    fetchFriends();
  }, [])

  const handleClick= e => {
    e.preventDefault();
    showAddFriend === false ? setShowAddFriend(true) : setShowAddFriend(false);
    console.log('add friend clicked!');
  }//end handleClick

  const deleteFriend= (friend) => {
    axiosWithAuth()
    .delete(`/api/friends/${friend.id}`)
    .then(delRes => {
      setFriends([
        ...delRes.data
      ]) 

      console.log('delRes.data: ', delRes.data);
    })
    .catch(delErr => {
      console.log('delErr: ', delErr);
    })
  }//end deleteFriend

  return (
    <div className= 'friendsCont'>
      <div className= 'buttonCont'>
        <button onClick= {handleClick} type= 'button'>Add Friend</button>
      </div>
      {showAddFriend===true ? <AddFriendForm 
        setShowAddFriend= {setShowAddFriend} 
        friends= {friends} 
        setFriends= {setFriends} /> : null}
      {console.log('friends from state: ', friends)}
      <Friend deleteFriend= {deleteFriend} friends= {friends} />
    </div>
  )
}

export default Friends;