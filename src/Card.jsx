import { useState } from "react";

const Card = ({ name, prize, img, cnt ,setMap , map , index,costOfPhone,setCostOfPhone , cartVal , cartUp}) => {

    const hatVC = (index)=>{
        cartUp(cartVal - 1)
        const newItem = map.filter((ele , idx)=>{
            return idx !== index;
        })
        setMap(newItem)
    }
    const aggeBadho=(index)=>{
        const newplusVal = [...map];
        cartUp(cartVal + 1)
        newplusVal[index].cnt ++;
        const newCost = costOfPhone + (newplusVal[index].prize);
        setCostOfPhone(newCost)
        setMap(newplusVal)
        
    };
    const picheBadho=(index)=>{
        const newplusVal = [...map];
        cartUp(cartVal - 1)
        const newCost = costOfPhone - (newplusVal[index].prize);
        setCostOfPhone(newCost)
        if(newplusVal[index].cnt === 1){
            hatVC(index);
            return;
        }
        newplusVal[index].cnt --;
        setMap(newplusVal)
    };

    return(
        <div className="w-[100%] flex justify-between">
            <div className="flex gap-3 justify-center items-center">
                <img className="w-[80px]" src={img} alt="" />
                <div>
                    <h2 className="font-bold text-2xl">{name}</h2>
                    <p>{prize}</p>
                    <button onClick={()=>hatVC(index)} className="border-blue-300 border px-1 rounded-lg">remove</button>
                </div>
            </div>
            <div className="flex gap-4 px-4 justify-center items-center">
                <span className="text-xl font-bold bg-blue-700 px-3 rounded-[10px] text-white">{cnt}</span>
                <span className="text-xl font-bold bg-green-700 text-white w-[30px] h-[30px] rounded-[50%] text-center cursor-pointer" onClick={()=>aggeBadho(index)}>+</span>
                <span className="text-xl font-bold bg-red-700 text-white  w-[30px] h-[30px] rounded-[50%] text-center cursor-pointer" onClick={()=>picheBadho(index)}>-</span>
            </div>
        </div>
    )
}
export default Card;