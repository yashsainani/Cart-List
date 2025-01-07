const HeaderCom = ({cartVal})=>{
    return(
        <div className="w-screen bg-[#645CFF] px-6 py-2">
            <div className="w-[900px]  m-auto p-4 flex justify-between">
                <p className="text-white text-3xl font-bold">GeeksShop</p>
                <div className="relative">
                    <img className=" w-[40px] h-[40px]" src=".././Cart.svg" alt="" />
                    <p className="absolute top-[-15px] right-[-15px] bg-white px-2 rounded-[50%] text-xl font-bold">{cartVal}</p>
                </div>
            </div>
        </div>
    )
}
export default HeaderCom;