import { useState } from 'react';
import Card from './Card'
import Data from './Constant'
import HeaderCom from './HeaderCom';

const App = () => {
  const [newArr, setNewArr] = useState(Data);
  const [cartCnt , setCartCnt] = useState(4);
  const [cost, setCost] = useState(newArr.reduce((acc,dec)=>{
          return acc + dec.prize;
    },0 ));

  const nikloBahar = ()=>{
    setNewArr([]);
    setCost(0)
  }
  if(newArr.length === 0) {
    return (
      <>
           <div className='flex flex-col gap-8 p-8'>
              <h1 className='text-5xl font-bold text-center'>Cart Bag</h1>
              <p className='text-center text-3xl text-gray-400'>Add Some Item</p>
           </div>
      </>
    )
  }
  return (
    <div className='w-[screen] overflow-hidden'>
    <HeaderCom cartVal={cartCnt}/>
    <div className='w-screen flex h-screen justify-center py-2'>
      <div className='w-[800px] flex flex-col gap-6'>
          <h1 className='text-5xl font-bold text-center'>Cart Bag</h1>
          <div className='flex flex-col gap-3 border-b-2 border-gray-300 py-8'>
              {/* <Card /> */}
              {newArr.map((ele , idx)=>{
                   return <Card key={idx}  name={ele.name} 
                  prize={ele.prize} 
                  img={ele.img} 
                  cnt={ele.cnt} 
                  setMap={setNewArr}
                  map = {newArr}
                  index = {idx}
                  costOfPhone={cost}
                  setCostOfPhone={setCost}
                  cartVal = {cartCnt}
                  cartUp = {setCartCnt}
                   />
                   
              })}
          </div>
          <div className='flex justify-between px-6 '>
            <p className='text-2xl font-bold '>Total</p>
            <p className='bg-blue-800 py-2 px-4 rounded-[10px] text-white text-xl'>{"$" + cost}</p>
          </div>
          <div className='w-[100%] flex justify-center'>
            <button onClick={nikloBahar} className=' text-white  w-fit  p-2 bg-red-700 rounded-[10px] cursor-pointer'>Clear Cart</button>
          </div>
    </div>
    </div>
    </div>
  )
}

export default App;