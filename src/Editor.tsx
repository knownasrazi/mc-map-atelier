import { useState } from "react";
type Block={id:string;x:number;y:number;type:string};
export default function Editor(){
    const [blocks,setBlocks]=useState<Block[]>([]);
    function add(e:React.MouseEvent){
        const r=(e.target as HTMLElement).getBoundingClientRect();
        setBlocks([...blocks,{id:Math.random().toString(36).slice(2),x:e.clientX-r.left,y:e.clientY-r.top,type:"stone"}]);
    }
    return <div onClick={add} className="h-96 w-full rounded-2xl border bg-white relative">{blocks.map(b=><div key={b.id} style={{left:b.x,top:b.y}} className="absolute h-4 w-4 bg-stone-500" />)}</div>;
}
