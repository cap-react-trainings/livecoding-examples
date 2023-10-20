import "./button-styles.css"

interface Props {
  text: string
  count?: number
}

const ButtonNotDestructured: React.FC<Props> = (props: Props) => {
  // count: how to use default values the not destructured approach
  return ( <button className="button" type="button">{props.text} - {props.count || 20}</button> );
}
 
export default ButtonNotDestructured;