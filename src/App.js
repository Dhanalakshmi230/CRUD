import React from 'react';
import Form from './form'
import Homepage from './homepage';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Table from './table';
// import Formik from './Formik'

function App() {
  return (
    <div className="App">
      
{/* <Formik/> */}
{ <BrowserRouter>
   <Homepage/>
   <Routes>
   <Route index element={<Table/>}></Route>
      <Route path='form' element={<Form/>}></Route>
      <Route path='table' element={<Table/>}></Route>
   <Route path='form/:parid' element={<Form/>}></Route>
    
   
    </Routes>
    </BrowserRouter> }
    </div>
  )
}

export default App;
