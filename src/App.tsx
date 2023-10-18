import React, { ButtonHTMLAttributes, LegacyRef, useRef, useState } from 'react';


interface IState {
  top: string; left: string; bottom: string; right: string;
  
}


function App() {
  const ref = useRef(null)

  const [paddingdirection, setPaddingdirection] = useState<IState>({
    top:"",
    left:"",
    bottom:"",
    right:""
  })
  



  

  

  let date:string = new Date().toLocaleDateString();
  let hour:number = new Date().getHours()
  let mintunes : number = new Date().getMinutes()



  const handleDetail = (e: React.MouseEvent<HTMLElement>)=>{
    
    let left, right, top, bottom
    
    let padding = e.currentTarget.className.split(" ")
    for(let i = 0; i <padding.length; i++){
      if(padding[i].includes("p")){
        if(padding[i]=='p'){
          let p = padding[i][2]
          left = p
          right = p
          bottom = p
          top = p
          
          

        }

        else{
          if(padding[i].includes('px')){
            let b = padding[i][3] 
            right = b
            left = b
            
            
          }
          else if (padding[i].includes('py')){
            let b = padding[i][3]

            bottom = b
            top = b
            

          }
          
        }
        
        
      }
    }

    console.log(` Padding : ${top}px  ${right}px   ${bottom}px   ${left}px  `)
    
    
    
  }

 
  
  
  return (
    <>
  
    <div className=' flex flex-row flex-wrap gap-2 mx-10'>
    <div  className='w-3/4 bg-stone-100   p-5'>

    <div className=' flex flex-row  mx-auto my-5 gap-10 flex-row-reverse  mt-10' >
      
      <button  className=' text-white bg-cyan-400 hover:bg-cyan-100   py-2 px-5 justify-end'   onClick={handleDetail}>Component overview</button>
    </div>
    
    <div className=' flex flex-row  mx-auto my-5 gap-10'>
      <button  className=' text-white bg-cyan-400 hover:bg-cyan-100   py-2 px-5 mt-10'ref={ref}  onClick={handleDetail}>Downtime</button>
      <button  className=' text-white bg-cyan-400 hover:bg-cyan-100   py-2 px-5 mt-10' onClick={handleDetail}>Finsih Operation</button>
      <button  className=' text-white bg-cyan-400 hover:bg-cyan-100   py-2 px-5 mt-10' onClick={handleDetail}>Detailed view</button>
    </div>

    </div>

    <div className='w-1/5 bg-sky-950 p-3 flex flex-col'>
    
    <div className='w-full py-2 px-2 mt-3 bg-green-600 text-white rounded'>
      <div className='flex flex-row  justify-between'>
        <text>Production</text>
        <text>Time : {hour} : {mintunes}</text>

      </div>
      <text className='flex flex-row justify-end'>Date  : {date}</text>

    </div>


    </div>
    </div>
    </>
    
  );
}

export default App;
