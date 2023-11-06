import React from "react";

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Form } from "./Component/Form";
import { Define } from "./Component/Define";


export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Define/>} />

    </Routes>
    </BrowserRouter>
    
    
    </>
    
  )
}