import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateUser} from '../redux/reducer';

const Login = (props) => {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     username: '',
  //     password: '',
  //     errorMsg: ''
  //   };

  // };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // handleChange(prop, val){
  //   this.setState({
  //     [prop]: val
  //   })
  // };

  // useEffect(() => {
  //   axios.post('/api/auth/login', {username, password})
  //     .then(res => {
  //       console.log('login', res.data)

  //     })
  // })

  function login() {
    axios.post('/api/auth/login', {username, password})
      .then(res => {
        getUser()
      })
      .catch(err => {
        console.log(err)
        setErrorMsg('Incorrect username or password!')
      })
    
  };

  function getUser(){
    axios.get('/api/auth/me')
      .then(res => {
        console.log('login', res.data)
        const {user_id} = res.data
        // const username = {username}
        props.updateUser({username, user_id})
        props.history.push('/home')
      })
      .catch(err => console.log(err))
  }


  function removeErrorMsg(){
    setUsername('')
    setPassword('')
    setErrorMsg('')
  };

  // render(){
    return(
      <div className='login'>
        <div className='loginContainer'>
          <img alt='logo'/>
          <h1>Love Your Shelf</h1>
          {errorMsg && <h3>{errorMsg}<span onClick={removeErrorMsg}>X</span></h3>}
          <div className='login-input-box'>
            <p>Username:</p>
            <input  onChange={e => setUsername(e.target.value)}/>
          </div>
          <div className='login-input-box'>
            <p>Password:</p>
            <input type='password' onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className='login-buttons'>
            <button onClick={login}>Login</button>
            <Link to='/register'>
              Not a member yet? Register here!
            </Link>
          </div>
        </div>
      </div>
    );
  // };
};
export default connect(null, {updateUser})(Login);