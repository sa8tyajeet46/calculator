export default function Equal(props){
    const calculate=()=>{
        props.setCalc(eval(props.calc).toString());
    }
    return (<button style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background: " #2DD3C5",
        boxShadow: "-10px -10px 24px rgba(255, 255, 255, 0.6), 10px 10px 24px rgba(174, 174, 192, 0.2)",
        borderRadius: "12px"}} onClick={()=>calculate()}>
      <div style={{fontFamily: "Oswald",
fontStyle:"normal",
fontWeight: "500",
fontSize: "24px",
lineHeight: "40px",
display: "flex",
alignItems: "center",
textAlign: "center",
color: "#FFFFFF"}}>{props.text}</div>

      
    </button>)
}