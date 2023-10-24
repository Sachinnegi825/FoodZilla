import { createContext } from "react";

const UserContext=createContext({User:{
         name:"Dummy",
         email:"dummy@gmail.com"
}})

export default UserContext;