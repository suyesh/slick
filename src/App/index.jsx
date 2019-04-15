import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Channel from "../components/Channel";
import { firebase } from "../firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  };

  return user ? (
    <div className="App">
      <Nav />
      <Channel />
    </div>
  ) : (
    <div className="Login">
      <h1>Slick!</h1>
      <button onClick={handleSignIn}> Sign in with google </button>
    </div>
  );
}

export default App;
