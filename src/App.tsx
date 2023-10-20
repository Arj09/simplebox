import React from "react";

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Form } from "./Component/Form";


export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Form/>} />

    </Routes>
    </BrowserRouter>
    
    
    </>
    
  )
}