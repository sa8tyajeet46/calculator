import Rectangle1 from './Rectangle1'
import Rectangle2 from './Rectangle-2'
import Circle1 from './Circle1'
import Circle2 from './Circle2'
import Group1 from './Group1'
import Group2 from './Group-2'
import Calculator from './Calculator'
export default function Container(){
    return(
        <div className="h-[600px] w-[800px] bg-[#F0F0F3] relative overflow-hidden">
        <Rectangle1></Rectangle1>
        <Rectangle2></Rectangle2>
        <Circle1></Circle1>
        <Circle2></Circle2>
        <Group2></Group2>
        <Group1></Group1>
        <Calculator></Calculator>
        </div>
    )
}