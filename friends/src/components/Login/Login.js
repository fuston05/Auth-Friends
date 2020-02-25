import React, {useState} from 'react';

//styles
import './Login.scss';

const Login = () => {

  const [formValue, setFormValue]= useState({
    userName: '',
    password: ''
  });

  const handleSubmit= e => {
    e.preventDefault();
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
          name= 'userName'
          onChange= {handleChange}
          value= {formValue.userName}
        />
        <label htmlFor= 'password'>Password</label>
        <input 
          type= 'password'
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