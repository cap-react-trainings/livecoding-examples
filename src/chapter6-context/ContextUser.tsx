import { useUser } from "./UserContext";

const ContextUser = () => {
  const {user} = useUser()
  return ( <div>
    Currently logged in user: {user.id} - {user.name} {user.surname}
  </div> );
}
 
export default ContextUser;