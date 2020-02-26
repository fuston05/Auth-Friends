import React, {useState} from 'react';

//utils
import {axiosWithAuth} from '../../utils/axiosWithAuth';

//styles
import './AddFriendForm.scss';

const AddFriendForm = ({setShowAddFriend, setFriends, friends}) => {
  const [friendForm, setFriendForm]= useState({
    name: '',
    age: '',
    email: '',
    id: Date.now()*Math.random()
  })

  const handleFriendChange= e => {
    e.preventDefault();
    console.log('addFriend form value');
    setFriendForm({
      ...friendForm,
      [e.target.name]: e.target.value
    });
  }//end handleFriendChange

  const handleAddFriendSubmit= e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/friends', friendForm)
    .then(res => {
      //update friendsState
      setFriends([
        ...res.data
      ]);
      setFriendForm({
        ...friendForm, ...{
          name: '',
          age: '',
          email: '',
          id: ''
        }
      });
      setShowAddFriend(false);
      console.log('addFriend res.data: ', res.data);
    })
    .catch(err => {
      console.log('addFriend err: ', err);
    })
    console.log('addFriendSubmitted!');
  }// end handleAddFriendSubmit

  return (
    <div className= 'addFriendFormCont'>
      <form onSubmit= {handleAddFriendSubmit}>
        <label htmlFor= 'name'>Name</label>
        <input 
          type= 'text'
          name= 'name'
          id= 'name'
          placeholder= 'name'
          value= {friendForm.name}
          onChange= {handleFriendChange}
        />
        <label htmlFor= 'age'>Age</label>
        <input 
          type= 'text'
          name= 'age'
          id= 'age'
          placeholder= 'Age'
          value= {friendForm.age}
          onChange= {handleFriendChange}
        />
        <label htmlFor= 'email'>Email</label>
        <input 
          type= 'email'
          name= 'email'
          id= 'email'
          placeholder= 'Email'
          value= {friendForm.email}
          onChange= {handleFriendChange}
        />
        <button id= 'addFriendButton' type= 'submit'>Add Friend</button>
      </form>
    </div>
  )
}

export default AddFriendForm;