import { useEffect } from "react";

const CONTAINER_COLORED_CLASS = "colorful-container";

const UseEffectExample = () => {
  useEffect(() => {
    const wrapper = document.querySelector("#use-effect-wrapper");
    wrapper?.classList.add(CONTAINER_COLORED_CLASS);

    return () => {
      wrapper?.classList.remove(CONTAINER_COLORED_CLASS);
    }
  }, []);
  return <div>Use-Effect-Example-Component is being rendered!</div>;
};

export default UseEffectExample;
