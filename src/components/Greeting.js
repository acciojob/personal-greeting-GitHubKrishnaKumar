import { useState } from "react";

export default function Greeting() {
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <p>Enter your name:</p>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      {firstName !== "" && <p>Hello {firstName}!</p>}
    </>
  );
}
