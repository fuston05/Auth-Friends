import React, {useState} from 'react';

//modules
import {axiosWithAuth} from '../../utils/axiosWithAuth';

//styles
import './Login.scss';

const Login = () => {
  const [isLoading, setIsLoading]= useState(false);
  const [formValue, setFormValue]= useState({
    username: '',
    password: ''
  });

  const handleSubmit= e => {
    e.preventDefault();
    setIsLoading(true);

    axiosWithAuth()
    .post('/api/login', formValue)
    .then(res => {
      window.localStorage.setItem('token', res.data.payload);
      console.log('res.data.payload', res.data.payload);
      setIsLoading(false);
    })
    .catch(err => {
      console.log('err', err);
    })

    console.log('submitted!');
  }//end handleSubmit

  const handleChange= e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  }//end handleChange

  return (
    <div className= 'formCont'>
      {console.log('formValue: ', formValue)}
      <form onSubmit= {handleSubmit}>
        <label htmlFor= 'userName'>UserName</label>
        <input 
          type= 'text'
          placeholder= 'Username'
          id= 'userName'
          name= 'username'
          onChange= {handleChange}
          value= {formValue.username}
        />
        <label htmlFor= 'password'>Password</label>
        <input 
          type= 'text'
          placeholder= 'Password'
          id= 'password'
          name= 'password'
          onChange= {handleChange}
          value= {formValue.password}
        />
        <button type= 'submit'>Submit</button>
      </form>      
    </div>
  )
}

export default Login;