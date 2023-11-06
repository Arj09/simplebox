import React from "react";

export const Define = ()=>{
    return(
        <>
        <div className=" w-4/5 mx-auto  my-0    flex flex-col gap-3  bg-sky-50 h-screen"  style={{border:"0.2px solid black"}}>
            <div className="mb-8 px-5 py-2  bg-sky-200">
                <text >User ID Creation</text>
            
            </div> 


           


            <div className=" w-full flex flex-row gap-10 px-10 justify-between"     >
                <div  className="w-2/5 flex flex-col  gap-3"  >
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Product ID : </text>
                        <input  style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4 rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Plant : </text>
                        <select    style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4 rounded-sm "></select>
                        

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Production Version : </text>
                        <select   style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4 rounded-sm "></select>
                    </div>

                    <div  className=" w-full flex flex-row justify-between"  >
                        <text> Valid From: </text>
                        <input  type="date"  style={{border:"0.2px solid black", padding:"1px 5px"}}  className="  w-2/4 rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Lot Size: </text>
                        <input  style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4  rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>routing Groups : </text>
                        <input  style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4  rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>BOM : </text>
                        <input  style={{border:"0.2px solid black", padding:"1px 5px"}}  className="  w-2/4 rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Issue Location: </text>
                        <input  style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4 rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Lot Number : </text>
                        <input  style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4 rounded-sm "/>

                    </div>
                  
                     
                   

                </div>
                <div  className="w-2/4   flex flex-col gap-3  pr-8"  >
                    <div  className=" w-full flex flex-row justify-between "  >
                        <text>Group Count : </text>
                        <input  style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4 rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Material Description : </text>
                        <select    style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4 rounded-sm "></select>
                        

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Created By : </text>
                        <input  type="text"  style={{border:"0.2px solid black", padding:"1px 5px"}}  className="  w-2/4 rounded-sm "/>

                    </div>

                    <div  className=" w-full flex flex-row justify-between"  >
                        <text> Valid To: </text>
                        <input  type="date"  style={{border:"0.2px solid black", padding:"1px 5px"}}  className="  w-2/4 rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Create Date: </text>
                        <input  type="date" style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4  rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Routing Group Center : </text>
                        <input   style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4  rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>  Alternate BOM : </text>
                        <input  style={{border:"0.2px solid black", padding:"1px 5px"}}  className="  w-2/4 rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Receiving  Location: </text>
                        <input  style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4 rounded-sm "/>

                    </div>
                    <div  className=" w-full flex flex-row justify-between"  >
                        <text>Deletion Flag : </text>
                        <input  style={{border:"0.2px solid black", padding:"1px 5px"}}  className=" w-2/4 rounded-sm "/>

                    </div>

                    <div  className=" w-full flex flex-row justify-between"  >
                        <text> Status : </text>
                        <div className="flex flex-row  align-middle justify-between  gap-20 mr-11  ">
                            <div className="flex flex-row  gap-1">
                                <input className="mt-1" type="checkbox" />
                                <text>Active</text>

                            </div>

                            <div className="flex flex-row  gap-1">
                                <input className="mt-1" type="checkbox" />
                                <text>Inactive</text>

                            </div>

                        </div>

                    </div>
                    

                
                   

                </div>
            </div>


            



            <div className=" flex flex-row gap-10  px-10   mt-40">
            <button className="bg-cyan-600 px-10 py-1  text-white">Check data</button>
            <button className="bg-cyan-600 px-10 py-1 text-white">Component Allocation</button>
            </div>
            



        </div>
        
        
        </>
    )
}