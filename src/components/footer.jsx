import { Link } from "react-router-dom"

export const Footer=()=>{
    return(
        <div>
            <h1 className="h-32"></h1>
            <div className="fixed bottom-0 w-full text-center bg-cyan-800 text-white" >
              <Link to={"/"}><h1>FOODZILLA</h1> </Link>
            <p>Sachin@2023 Copyright Reserved</p>
            
            
            </div>
            
        </div>
    )
}