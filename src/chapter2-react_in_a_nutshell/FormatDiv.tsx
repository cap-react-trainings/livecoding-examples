const FromatDiv = () => {
  const person = {
    id: 2,
    surname: "Smith",
    firstName: "Jane",
    age: 25,
  }
  const calculateDiffTo100 = (age: number) => 100 - age
  return ( <div>
    Hello {person.firstName}! You're {person.age} years old. It still takes {calculateDiffTo100(person.age)} years until you will be celebrating your 100th birthday!
  </div> );
}
 
export default FromatDiv;