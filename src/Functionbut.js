export default function Functionbut(props){
    return (<button style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background: "#F0F0F3",
        boxShadow: "-10px -10px 24px rgba(255, 255, 255, 0.6), 10px 10px 24px rgba(174, 174, 192, 0.2)",
        borderRadius: "12px"}} onClick={()=>{
            if(props.text==='+/-')
            return
        if(props.text==="C")
        {
            props.setCalc('');
            props.setRes('');
        }
        else
        props.updateCalc(props.text)
        }}>
      <div style={{fontFamily: "Oswald",
fontStyle:"normal",
fontWeight: "500",
fontSize: "24px",
lineHeight: "40px",
display: "flex",
alignItems: "center",
textAlign: "center",
color: "#898989"}}>{props.text}</div>

      
    </button>)
}