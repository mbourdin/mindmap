import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import TreeNode from "./components/TreeNode";
import './App.css';

function App() {

  return (
    <div className="App">
        <TreeNode leaves={[]} isRoot={true} root={null} title={"Root"} offset={0}/>
    </div>
  );
}

export default App;
