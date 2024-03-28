import { useRef } from "react";

const LoginForm = ({ postLogin }) => {
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    // TODO: Hier Login implementieren
    event.preventDefault()
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    postLogin(name, password);
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" name="username" placeholder="Username" />
      <input
        ref={passwordRef}
        type="password"
        name="password"
        placeholder="Passwort"
      />
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
