
import {Outlet} from "react-router-dom"
const About=()=>{
    return (
        <> 
             
             <div className="relative top-20">

            <p className="bg-orange-400 h-72 text-3xl p-10">
            <span className="text-9xl">"</span> Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
            </p>
            <h1 className="text-8xl text-center mt-10">What’s In Store For The Future?</h1>
            <p className="text-center text-3xl mt-5 w-[850px] mx-auto">Foodzilla has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</p>
            <Outlet/>
             </div>
            
           
        </>
    )
}

export default About;