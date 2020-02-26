import React from 'react';

const Friend = ({friends, deleteFriend}) => {
  return (
    <div className= 'friendCont'>
      {
        friends.map( friend => {
          return (
            <div key= {Date.now()*Math.random()} className= 'friendCard'>
              <h1>{friend.name}</h1>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
              <div className= 'friendButtonCont'>
                <button onClick= {() => deleteFriend(friend)}>Delete</button>
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