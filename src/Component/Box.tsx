import React from 'react';


function Box() {
  let date:string = new Date().toLocaleDateString();
  let hour:number = new Date().getHours()
  let mintunes : number = new Date().getMinutes()

  return (
    <div style={{width:"80vw", height:"100vh", margin:"auto"}}>
      <div style={{width:"20%", height:"10%", backgroundColor:"green",color:"white", borderRadius:"8px", padding:"20px", marginLeft:"50px", marginTop:"50px"}}>
        <div style={{display:'flex', flexDirection:'row', margin:"10px auto", justifyContent:"space-between"}}>
          <text>Production</text>
          <text>Time : {hour} : {mintunes} </text>
        </div>
        <text style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>Date  : {date}</text>
       
      </div>
    </div>
    
  );
}

export default Box;
