
let a=1;
const Shimmer=()=>{
    return(
        <div className="flex relative top-28 left-20 gap-8 flex-wrap">
        {Array(12).fill("").map(()=>(
            <div className="bg-gray-400 h-96 w-80" key={a++}>
            </div>
        ))}
         
       
        </div>
    )
}

export default Shimmer;