import React, { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); // Fixed typo here
  const [err, setErr] = useState(true);

  const changeFirst = (e) => {
    setFirstName(e.target.value);
  };

  const changeLast = (e) => {
    setLastName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">
          First Name:
          <input type="text" id="firstname" required onChange={changeFirst} />
        </label>
        <br />
        <br />
        <label htmlFor="lastname">
          Last Name:
          <input type="text" id="lastname" required onChange={changeLast} />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {err ? null : <p>Full Name: {firstName} {lastName}</p>}
    </>
  );
}
