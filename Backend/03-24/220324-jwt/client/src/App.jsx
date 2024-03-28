import { useState } from "react";
import "./App.css";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";

function App() {
  const [entries, setEntries] = useState([]);

  const postRegistration = async (email, name, password) => {
    const response = await fetch("http://localhost:3000/users/register", {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, name, password})
    })
  }

  const postLogin = async (name, password) => {
    // hier post mit zugangsdaten an /users/login implementieren
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name, password})
    })
    const json = await response.json()
    // das zurückgeschickte bearertoken dann für spätere verwendung speichern
    if (json.status === "ok") {
      localStorage.setItem("token", json.token)
      fetchEntries();
    }
  };


  const fetchEntries = async () => {
    // hier muss ein Bearer Token Mitgeschickt werden, findet heraus wie
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3000/entries", {
      headers: {Authorization: `Bearer ${token}`}
    });
    const json = await response.json();
    setEntries(json);
};


  const postEntry = async (content) => {
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" , Authorization:  `Bearer ${token}`},
      body: JSON.stringify({ content }),
    });
    // refetch entries after post
    fetchEntries();
  };


  return (
    <div>
      <RegisterForm postRegistration={postRegistration}/>
      <p>Login</p>
      <LoginForm postLogin={postLogin} />
      <hr />
      <p>Hier könnt ihr - noch ohne login - einträge posten</p>
      <EntryForm postEntry={postEntry} />
      <hr />
      <p>Hier sollten später einträge erscheinen</p>
      <EntryList entries={entries} />
    </div>
  );
}

export default App;
