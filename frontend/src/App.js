import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Student from './student';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student/>}></Route>
      <Route path='/update/:id' element={<UpdateStudent/>}></Route>
     <Route path='/CreateStudent' element={<CreateStudent/>}></Route>
      </Routes>      </BrowserRouter>
      
    </div>
  );
}

export default App;
