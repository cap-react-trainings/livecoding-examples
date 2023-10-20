import { useState } from "react";

const UseStateExample = () => {
  const [name, setName] = useState<string>("")
  return ( <div>
    <label htmlFor="name">Please enter your name:</label>
    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
  </div> );
}
 
export default UseStateExample;