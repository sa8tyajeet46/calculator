export default function Group2(){
    const group=()=>{
        const array=[];
        for(let i=0;i<30;i++)
        {
            array.push(<div className="w-[5.77px] h-[5.77px] rounded-full" style={{background:"#8998c526"}}></div>
            )
        }
        return array;
    }
    return(
        <div 
        style={{position: "absolute",
        width: "65.25px",
        height: "112.49px",
        left: "271px",
        top: "63px",
        zIndex:"1"
       }} className="grid grid-cols-6">
{group()}
       </div>
    )
    }