import React from "react";

export const Form = ()=>{
    return(
        <>
        <div className=" w-4/5 mx-auto  my-0  px-10 py-10 flex flex-col gap-3  bg-sky-50 h-screen"  style={{border:"0.2px solid black"}}> 


            <div className="w-2/4" >
                <text className="mr-4">User ID : </text>
                <input className="rounded-sm  ml-20  w-1/5"    style={{border:"0.2px solid black " }} />

            </div>


            <div className="flex flex-row gap-10">
                <div >
                    <text className="mr-2">First Name : </text>
                    <input className="rounded-sm  ml-16"    style={{border:"0.2px solid black " }} />

                </div>
                <div  className="ml-20" >
                    <text className="mr-2.5">Last Name : </text>
                    <input className="ml-16  rounded-sm"    style={{border:"0.2px solid black " }} />

                </div>
            </div>
            <div className="flex flex-row gap-10">
                <div >
                    <text className="mr-1">Employee ID : </text>
                    <input className="rounded-sm  ml-14"    style={{border:"0.2px solid black " }} />

                </div>
                <div  className="ml-20" >
                    <text className="mr-0.5">Password : </text>
                    <input className="ml-20  rounded-sm"    style={{border:"0.2px solid black " }} />

                </div>
            </div>

            <div className="flex flex-row gap-10">
                <div >
                    <text className="mr-2.5">Phone No. : </text>
                    <input className="rounded-sm  ml-16"    style={{border:"0.2px solid black " }} />

                </div>
                <div  className="ml-20" >
                    <text>Department : </text>
                    <select className="px-20 ml-16 rounded-sm">
                        
                    </select>
                    

                </div>
            </div>


            <div className="flex flex-row gap-10">
                <div >
                    <text className="mr-9">Role : </text>
                    <select className="px-20 ml-20 rounded-sm">
                        
                    </select>

                </div>
                <div  className="ml-20  flex flex-row" >
                    <text className="mr-4">Status : </text>
                    <div className="flex flex-row ml-14 gap-5 px-10 align-middle">
                        <div>
                            <input type="checkbox"  />
                            <text className="ml-1">Active</text>
                        </div>
                        <div>
                            <input type="checkbox"  />
                            <text className="ml-1">Inactive</text>
                        </div>
                    </div>
                    
                    

                </div>

                
            </div>

            <div >
                    <text className="mr-5">Shift : </text>
                    <select className="px-2 ml-24 rounded-sm">
                        <option>A</option>
                    </select>

            </div>



            <div className=" flex flex-row gap-10 mt-96">
            <button className="bg-sky-200 px-10 py-2">Save</button>
            <button className="bg-sky-200 px-10 py-2">Cancel</button>
            </div>
            



        </div>
        
        
        </>
    )
}