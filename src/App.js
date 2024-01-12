import { useState } from "react";


export default function App() {
  const [firstName, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [err, setErr] = useState(true);

  const changeFirst = (e) => {
    setFirstName(e.target.value);
  };
  const changeLast = (e) => {
    setLastName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (firstName === " " || lastname === " ") setErr(true);
    else {
      setErr(false);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">
          First Name:
          <input id="firstname" required onChange={changeFirst} />
        </label>
        <br />
        <br />
        <label htmlFor="lastname">
          Last Name:
          <input id="lastname" required onChange={changeLast} />
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <p>{err ? "" : `Full Name: ${firstName} ${lastname}`}</p>
    </>
  );
}
