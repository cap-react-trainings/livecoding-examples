interface Props {
  count: number
}

const ConditionalText: React.FC<Props> = (props: Props) => {
  const text1 = <p>Your number is bigger than 50</p>
  const text2 = <p>Your number is smaller than 50</p>
  const text3 = <p>Your number is 50</p>
  return ( <div>
    {
      props.count > 50 ? text1 : props.count < 50 ? text2 : text3
    }
  </div> );
  /**
   * Alternative
   */
  return (
    <div>
      {props.count > 50 && text1}
      {props.count < 50 && text2}
      {props.count === 50 && text3}
    </div>
  )
}
 
export default ConditionalText;