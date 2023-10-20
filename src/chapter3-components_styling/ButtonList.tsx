import ButtonDestructured from "./ButtonDestructured";
import ButtonNotDestructured from "./ButtonNotDestructured";

const ButtonList = () => {
  return (
    <div className="button-list">
      {/* error: missing props */}
      {/* <ButtonNotDestructured /> */}
      <ButtonNotDestructured text="Button 1" count={30} />
      <ButtonNotDestructured text="Button 2" />
      <ButtonDestructured text="Button 3" count={30} />
      <ButtonDestructured text="Button 4" />
    </div>
  );
}
 
export default ButtonList;