import React, {createContext} from 'react'
import { useState } from 'react'


const UserContext = createContext()
export default function Login() {
    
    const[user,setUser] = useState({})
    const[userName, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const handleSubmit = (e) => {
          e.preventDefault()
          setUser({userName: userName, password: password})
          console.log(user)
          console.log(userName)
          console.log(password)
    }
  return (
    <>
    <UserContext.Provider value={user}>
        <h2>Login</h2>
        <input type="text"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/>
        <input type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </UserContext.Provider>
    </>
  )
}

export { UserContext }
