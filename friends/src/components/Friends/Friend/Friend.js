import React from 'react';

const Friend = ({friends}) => {
  return (
    <div className= 'friendCont'>
      {
        friends.map( friend => {
          return (
            <div key= {friend.id} className= 'friendCard'>
              <h1>{friend.name}</h1>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </div>
          )
        } )
      }
    </div>
  )
}

export default Friend;