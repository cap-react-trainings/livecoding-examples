import { useState } from "react";
import UseEffectExample from "./UseEffectExample";

const UseEffectExampleContainer = () => {
  const [showText, setShowText] = useState(false)

  return ( <div id="use-effect-wrapper" className="effect-container">
    <button className="button" type="button" onClick={() => setShowText(!showText)}>{!showText ? <p>Show Text</p> : <p>Hide Text</p>}</button>
    {showText && <UseEffectExample />}
  </div>  );
}
 
export default UseEffectExampleContainer;