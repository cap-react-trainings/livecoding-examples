import "./button-styles.css"

interface Props {
  text: string;
  count?: number;
}
  
/*count: how to use default values the destruchtured way approach*/

const ButtonDestructured: React.FC<Props> = ({text, count = 20}: Props) => {
  return (
    <button className="button" type="button">
      {text} - {count}
    </button>
  );
};

export default ButtonDestructured;
