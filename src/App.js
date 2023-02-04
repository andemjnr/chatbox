import React, { useState, useRef } from "react"
import './App.css';
import { Auth } from "./components/Auth";
import Cookies from 'universal-cookie';
import { Chat } from "./components/Chat"
import { async } from "@firebase/util";
import { signOut} from "firebase/auth";
import {auth} from './firebase_config';
const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut(auth)
    cookies.remove('auth-token')
    setIsAuth(false)
    setRoom(null);
  }
  if (!isAuth) {
  return <div>
    <Auth setIsAuth={setIsAuth} />
  </div>
}
return (
  <>
  {room ? (
    <Chat room={room} />
  ) : (
  <div>
    <label>Enter Room Name</label>
    <input ref={roomInputRef}/>
    <button onClick={() => setRoom(roomInputRef.current.value)}>Enter chat</button>
  </div>
  )}
  <div className="sign-out">
    <button onClick={signUserOut}> Log out</button>
  </div>
</>
);
}

export default App;
