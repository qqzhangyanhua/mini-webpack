import React from 'react';
import 'antd/dist/reset.css';
import{List} from './component/List';
import { Button } from 'antd';
function App() {
  return (
    <div className="App">
     <List/>
     <div bg-green-500 className="bg-green-500 text-white p-4 my-custom-class">
      Hello, World!
    </div>
      <Button type='primary'>Butto1n</Button>
      
    </div>
  );
}

export default App;
