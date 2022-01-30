import React from 'react';
import { Counter } from './features/counter/Counter';
import { Form } from './features/form/Form';
import { Scheme } from './Scheme';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
       
      <Router>
     
     <Routes>
       
       
                      <Route path="/login"  element={<Counter/>}/>
      
                  
                     <Route path="/sheme"  element={<Scheme/>}/>
                           
                  
                     <Route path="/form"  element={<Form/>}/>
                           
                      
                     
     </Routes>
              
        
        </Router>
                      
    
  );
}

export default App;
