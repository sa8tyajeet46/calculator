import Functionbut from "../Functionbut";
import Numberbut from "./Numberbut";
import OPerationbut from "./Operationbut";
import Zero from './Zero'
import Equal from "./Equal";
import { useState } from "react";
export default function Calculator(){
    const [calc,setCalc]=useState('');
    const [res,setRes]=useState('');
    const ops=['+','-','/','*','%','.'];
    const updateCalc=(value)=>{
        if(ops.includes(value) && calc ===''||
        ops.includes(value) && ops.includes(calc.slice(-1)))
        return;

        setCalc(calc+value);
        if(!ops.includes(value))
        {
            setRes(eval(calc+value).toString());
        }
    }
    return(<div style={{position: "absolute",
        width: "199.81px",
        height: "400.11px",
        left: "300.33px",
        top: "99.94px",
        borderRadius: "12px",
        zIndex:"2",
        filter:"drop-shadow(-10px -10px 30px #FFFFFF) drop-shadow(10px 10px 30px rgba(174, 174, 192, 0.4))",
        borderRadius:"12px",
        overflow:"hidden"}}>
          <div className="w-full h-[40%] flex justify-end items-end text-white" style={{background:"linear-gradient(145.27deg, #2E2C2C -4.62%, #0B0A0A 64.58%)"}}>
           <div className="flex flex-col px-3">
               <div className="text-gray-500 font-semibold text-2xl" style={{fontFamily: "Oswald",
fontStyle:"normal"}}>
              {calc || "0"}
               </div>
               <div className="text-gray-100 font-bold text-3xl" style={{fontFamily: "Oswald",
fontStyle:"normal"}}>
              {res}
               </div>
            
           </div>
          </div>
          <div className="w-full h-[60%] bg-[#F0F0F3] grid grid-cols-4 gap-1 py-3 px-3">
           <Functionbut text={"C"} calc={calc}      updateCalc={updateCalc}
           setCalc={setCalc}
           setRes={setRes}></Functionbut>
           <Functionbut text={"+/-"}></Functionbut>
           <Functionbut text={"%"} 
           updateCalc={updateCalc}
           setCalc={setCalc}
           setRes={setRes}></Functionbut>
           <OPerationbut text={"/"} 
           updateCalc={updateCalc}></OPerationbut>
           <Numberbut text={"1"} 
           updateCalc={updateCalc}></Numberbut>
           <Numberbut text={"2"} 
           updateCalc={updateCalc}></Numberbut>
           <Numberbut text={"3"} 
           updateCalc={updateCalc}></Numberbut>
           <OPerationbut text={"*"} 
           updateCalc={updateCalc}></OPerationbut>
           <Numberbut text={"4"} 
           updateCalc={updateCalc}></Numberbut>
           <Numberbut text={"5"} 
           updateCalc={updateCalc}></Numberbut>
           <Numberbut text={"6"} 
           updateCalc={updateCalc}></Numberbut>
           <OPerationbut text={"-"} 
           updateCalc={updateCalc}></OPerationbut>
           <Numberbut text={"7"} 
           updateCalc={updateCalc}></Numberbut>
           <Numberbut text={"8"} 
           updateCalc={updateCalc}></Numberbut>
           <Numberbut text={"9"} 
           updateCalc={updateCalc}></Numberbut>
           <OPerationbut text={"+"} 
           updateCalc={updateCalc}></OPerationbut>
          <Zero text={"0"} 
          updateCalc={updateCalc}></Zero>
          <Numberbut text={"."} 
          updateCalc={updateCalc}></Numberbut>
          <Equal text={"="} setCalc={setCalc} calc={calc} res={res} setRes={setRes} ops={ops} ></Equal>
          </div>
    </div>)
}