import React from 'react';

//styles
import './Friend.scss';

const Friend = ({friends, deleteFriend, editFriend}) => {
  return (
    <div className= 'friendCont'>
      {
        friends.map( friend => {
          return (
            <div key= {Date.now()*Math.random()} className= 'friendCard'>
              <h1>{friend.name}</h1>
              <p><b>Age: </b>{friend.age}</p>
              <p><b>Email: </b>{friend.email}</p>
              <div className= 'friendButtonCont'>
                <button class= 'deleteButton' onClick= {() => deleteFriend(friend)}>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          )
        } )
      }
    </div>
  )
}

export default Friend;